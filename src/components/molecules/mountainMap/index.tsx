import {
  sectionDescriptionText,
  sectionPanel,
  sectionTitleText,
} from '@/components/molecules/sharedSurfaces/style'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import { useLocale } from '@/i18n/index'
import { getLocalizedMountainName } from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { toLocalizedPath } from '@/utils/seoPaths'
import Link from 'next/link'
import {
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type WheelEvent,
} from 'react'
import styled from 'styled-components'

type Props = {
  mountains: UnifiedMountainData[]
}

type PixelPoint = {
  x: number
  y: number
}

type MapBounds = {
  left: number
  top: number
  width: number
  height: number
}

const JAPAN_BOUNDS = {
  minLatitude: 24,
  maxLatitude: 46,
  minLongitude: 122,
  maxLongitude: 146,
} as const

const TILE_SIZE = 256
const TILE_ZOOM = 5
const TILE_SCALE = TILE_SIZE * 2 ** TILE_ZOOM
const MAP_ASPECT_RATIO = 16 / 9
const MAP_PADDING_RATIO = 0.14
const MAX_ZOOM_LEVEL = 4
const ZOOM_STEP = 1.65
const KEYBOARD_PAN_RATIO = 0.12

const MapSection = styled.section`
  ${sectionPanel}
`

const MapTitle = styled.h2`
  ${sectionTitleText}
`

const MapDescription = styled.p`
  ${sectionDescriptionText}
`

const MapCanvas = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 36rem;
  overflow: hidden;
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.sm};
  background: ${UI_COLORS.surfacePrimary};
  cursor: grab;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`

const MapControls = styled.div`
  position: absolute;
  top: ${UI_SPACE.sm};
  right: ${UI_SPACE.sm};
  z-index: 4;
  display: inline-flex;
  overflow: hidden;
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.sm};
  background: rgba(250, 250, 250, 0.94);
`

const MapControlButton = styled.button`
  min-width: 3.6rem;
  min-height: 3.6rem;
  padding: ${UI_SPACE.xs} ${UI_SPACE.sm};
  border: 0;
  border-right: 1px solid ${UI_COLORS.borderSoft};
  color: ${UI_COLORS.textPrimary};
  background: transparent;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;

  &:last-child {
    border-right: 0;
  }

  &:hover,
  &:focus-visible {
    background: ${UI_COLORS.surfaceSecondary};
    outline: none;
  }

  &:disabled {
    color: ${UI_COLORS.textMuted};
    cursor: default;
  }
`

const MapTile = styled.img.attrs<{
  $left: number
  $top: number
  $width: number
  $height: number
}>(({ $left, $top, $width, $height }) => ({
  style: {
    left: `${$left}%`,
    top: `${$top}%`,
    width: `${$width}%`,
    height: `${$height}%`,
  },
}))<{ $left: number; $top: number; $width: number; $height: number }>`
  position: absolute;
  object-fit: cover;
  user-select: none;
`

const MapPoint = styled(Link).attrs<{ $x: number; $y: number }>(({ $x, $y }) => ({
  style: {
    left: `${$x}%`,
    top: `${$y}%`,
  },
}))<{ $x: number; $y: number }>`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  background: ${UI_COLORS.textPrimary};
  box-shadow: 0 0 0 0.3rem rgba(51, 51, 51, 0.18);
  transform: translate(-50%, -50%);
  z-index: 2;

  &:hover,
  &:focus-visible {
    width: 1.8rem;
    height: 1.8rem;
    outline: 2px solid ${UI_COLORS.focus};
    outline-offset: 2px;
    z-index: 3;
  }
`

const MapLegend = styled.p`
  position: absolute;
  left: ${UI_SPACE.md};
  bottom: ${UI_SPACE.sm};
  z-index: 4;
  margin: 0;
  padding: ${UI_SPACE.xs} ${UI_SPACE.sm};
  border-radius: ${UI_RADIUS.sm};
  color: ${UI_COLORS.textSecondary};
  background: rgba(250, 250, 250, 0.92);
  font-size: 1.2rem;
  line-height: 1.4;
`

const MapCredit = styled.a`
  position: absolute;
  right: ${UI_SPACE.sm};
  bottom: ${UI_SPACE.sm};
  z-index: 4;
  padding: ${UI_SPACE.xs} ${UI_SPACE.sm};
  border-radius: ${UI_RADIUS.sm};
  color: ${UI_COLORS.textSecondary};
  background: rgba(250, 250, 250, 0.92);
  font-size: 1.2rem;
  line-height: 1.4;
`

const hasValidCoordinates = (mountain: UnifiedMountainData): boolean => {
  return (
    mountain.latitude >= JAPAN_BOUNDS.minLatitude &&
    mountain.latitude <= JAPAN_BOUNDS.maxLatitude &&
    mountain.longitude >= JAPAN_BOUNDS.minLongitude &&
    mountain.longitude <= JAPAN_BOUNDS.maxLongitude
  )
}

const projectToWorldPixel = (latitude: number, longitude: number): PixelPoint => {
  const sinLatitude = Math.sin((latitude * Math.PI) / 180)
  const x = ((longitude + 180) / 360) * TILE_SCALE
  const y = (0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI)) * TILE_SCALE

  return { x, y }
}

const getMapBounds = (mountains: UnifiedMountainData[]): MapBounds => {
  const projectedPoints = mountains.map((mountain) =>
    projectToWorldPixel(mountain.latitude, mountain.longitude),
  )
  const left = Math.min(...projectedPoints.map((point) => point.x))
  const right = Math.max(...projectedPoints.map((point) => point.x))
  const top = Math.min(...projectedPoints.map((point) => point.y))
  const bottom = Math.max(...projectedPoints.map((point) => point.y))
  const width = Math.max(right - left, TILE_SIZE)
  const height = Math.max(bottom - top, TILE_SIZE)
  let paddedLeft = left - width * MAP_PADDING_RATIO
  let paddedTop = top - height * MAP_PADDING_RATIO
  let paddedWidth = width * (1 + MAP_PADDING_RATIO * 2)
  let paddedHeight = height * (1 + MAP_PADDING_RATIO * 2)
  const currentAspectRatio = paddedWidth / paddedHeight

  if (currentAspectRatio < MAP_ASPECT_RATIO) {
    const nextWidth = paddedHeight * MAP_ASPECT_RATIO
    paddedLeft -= (nextWidth - paddedWidth) / 2
    paddedWidth = nextWidth
  } else {
    const nextHeight = paddedWidth / MAP_ASPECT_RATIO
    paddedTop -= (nextHeight - paddedHeight) / 2
    paddedHeight = nextHeight
  }

  const paddedRight = paddedLeft + paddedWidth
  const paddedBottom = paddedTop + paddedHeight
  const clampedLeft = Math.max(0, paddedLeft)
  const clampedTop = Math.max(0, paddedTop)
  const clampedRight = Math.min(TILE_SCALE, paddedRight)
  const clampedBottom = Math.min(TILE_SCALE, paddedBottom)

  return {
    left: clampedLeft,
    top: clampedTop,
    width: Math.max(TILE_SIZE, clampedRight - clampedLeft),
    height: Math.max(TILE_SIZE, clampedBottom - clampedTop),
  }
}

const clampBoundsToWorld = (bounds: MapBounds): MapBounds => {
  const width = Math.min(TILE_SCALE, bounds.width)
  const height = Math.min(TILE_SCALE, bounds.height)
  const left = Math.max(0, Math.min(TILE_SCALE - width, bounds.left))
  const top = Math.max(0, Math.min(TILE_SCALE - height, bounds.top))

  return { left, top, width, height }
}

const getZoomedBounds = (
  baseBounds: MapBounds,
  zoomLevel: number,
  panOffset: PixelPoint = { x: 0, y: 0 },
): MapBounds => {
  if (zoomLevel === 0) {
    return baseBounds
  }

  const zoomScale = ZOOM_STEP ** zoomLevel
  const width = Math.max(TILE_SIZE, baseBounds.width / zoomScale)
  const height = Math.max(TILE_SIZE / MAP_ASPECT_RATIO, baseBounds.height / zoomScale)
  const centerX = baseBounds.left + baseBounds.width / 2 + panOffset.x
  const centerY = baseBounds.top + baseBounds.height / 2 + panOffset.y

  return clampBoundsToWorld({
    left: centerX - width / 2,
    top: centerY - height / 2,
    width,
    height,
  })
}

const getPanOffsetForBounds = (baseBounds: MapBounds, bounds: MapBounds): PixelPoint => {
  return {
    x: bounds.left + bounds.width / 2 - (baseBounds.left + baseBounds.width / 2),
    y: bounds.top + bounds.height / 2 - (baseBounds.top + baseBounds.height / 2),
  }
}

const clampPanOffset = (
  baseBounds: MapBounds,
  zoomLevel: number,
  panOffset: PixelPoint,
): PixelPoint => {
  return getPanOffsetForBounds(baseBounds, getZoomedBounds(baseBounds, zoomLevel, panOffset))
}

const toMapPercent = (latitude: number, longitude: number, mapBounds: MapBounds): PixelPoint => {
  const point = projectToWorldPixel(latitude, longitude)
  const x = ((point.x - mapBounds.left) / mapBounds.width) * 100
  const y = ((point.y - mapBounds.top) / mapBounds.height) * 100

  return {
    x: Math.max(1.5, Math.min(98.5, x)),
    y: Math.max(1.5, Math.min(98.5, y)),
  }
}

const getTiles = (mapBounds: MapBounds) => {
  const minTileX = Math.floor(mapBounds.left / TILE_SIZE)
  const maxTileX = Math.floor((mapBounds.left + mapBounds.width) / TILE_SIZE)
  const minTileY = Math.floor(mapBounds.top / TILE_SIZE)
  const maxTileY = Math.floor((mapBounds.top + mapBounds.height) / TILE_SIZE)
  const tiles = []

  for (let x = minTileX; x <= maxTileX; x += 1) {
    for (let y = minTileY; y <= maxTileY; y += 1) {
      tiles.push({
        x,
        y,
        left: ((x * TILE_SIZE - mapBounds.left) / mapBounds.width) * 100,
        top: ((y * TILE_SIZE - mapBounds.top) / mapBounds.height) * 100,
        width: (TILE_SIZE / mapBounds.width) * 100,
        height: (TILE_SIZE / mapBounds.height) * 100,
      })
    }
  }

  return tiles
}

const MountainMap = ({ mountains }: Props) => {
  const { t, locale } = useLocale()
  const canvasRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef<PixelPoint | null>(null)
  const [zoomLevel, setZoomLevel] = useState(0)
  const [panOffset, setPanOffset] = useState<PixelPoint>({ x: 0, y: 0 })
  const visibleMountains = useMemo(() => mountains.filter(hasValidCoordinates), [mountains])
  const baseMapBounds = useMemo(
    () => (visibleMountains.length > 0 ? getMapBounds(visibleMountains) : null),
    [visibleMountains],
  )
  const mapBounds = useMemo(
    () => (baseMapBounds ? getZoomedBounds(baseMapBounds, zoomLevel, panOffset) : null),
    [baseMapBounds, panOffset, zoomLevel],
  )
  const tiles = useMemo(() => (mapBounds ? getTiles(mapBounds) : []), [mapBounds])

  if (visibleMountains.length === 0 || !mapBounds) {
    return null
  }

  const setZoom = (nextZoomLevel: number) => {
    setZoomLevel(nextZoomLevel)
    setPanOffset((current) =>
      baseMapBounds ? clampPanOffset(baseMapBounds, nextZoomLevel, current) : current,
    )
  }
  const zoomIn = () => setZoom(Math.min(MAX_ZOOM_LEVEL, zoomLevel + 1))
  const zoomOut = () => setZoom(Math.max(0, zoomLevel - 1))
  const resetZoom = () => {
    setZoomLevel(0)
    setPanOffset({ x: 0, y: 0 })
  }
  const endDrag = () => {
    dragStartRef.current = null
  }
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault()

    if (event.deltaY < 0) {
      zoomIn()

      return
    }

    zoomOut()
  }
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest('a, button')) {
      return
    }

    dragStartRef.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || !baseMapBounds || !mapBounds || !canvasRef.current) {
      return
    }

    const canvasRect = canvasRef.current.getBoundingClientRect()
    const deltaX = event.clientX - dragStartRef.current.x
    const deltaY = event.clientY - dragStartRef.current.y
    dragStartRef.current = { x: event.clientX, y: event.clientY }

    setPanOffset((current) =>
      clampPanOffset(baseMapBounds, zoomLevel, {
        x: current.x - (deltaX / canvasRect.width) * mapBounds.width,
        y: current.y - (deltaY / canvasRect.height) * mapBounds.height,
      }),
    )
  }
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
    endDrag()
  }
  const panByRatio = (deltaXRatio: number, deltaYRatio: number) => {
    if (!baseMapBounds || !mapBounds) {
      return
    }

    setPanOffset((current) =>
      clampPanOffset(baseMapBounds, zoomLevel, {
        x: current.x + deltaXRatio * mapBounds.width,
        y: current.y + deltaYRatio * mapBounds.height,
      }),
    )
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === '+') {
      event.preventDefault()
      zoomIn()

      return
    }
    if (event.key === '-') {
      event.preventDefault()
      zoomOut()

      return
    }
    if (event.key === '0') {
      event.preventDefault()
      resetZoom()

      return
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      panByRatio(-KEYBOARD_PAN_RATIO, 0)

      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      panByRatio(KEYBOARD_PAN_RATIO, 0)

      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      panByRatio(0, -KEYBOARD_PAN_RATIO)

      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      panByRatio(0, KEYBOARD_PAN_RATIO)
    }
  }

  return (
    <MapSection aria-labelledby="mountain-map-title">
      <MapTitle id="mountain-map-title">{t.MAP_TITLE}</MapTitle>
      <MapDescription>{t.MAP_DESCRIPTION}</MapDescription>
      <MapCanvas
        ref={canvasRef}
        role="application"
        tabIndex={0}
        aria-label={t.MAP_TITLE}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <MapControls role="group" aria-label={t.MAP_ZOOM_CONTROLS}>
          <MapControlButton type="button" onClick={zoomIn} disabled={zoomLevel === MAX_ZOOM_LEVEL}>
            +
          </MapControlButton>
          <MapControlButton type="button" onClick={zoomOut} disabled={zoomLevel === 0}>
            -
          </MapControlButton>
          <MapControlButton type="button" onClick={resetZoom} disabled={zoomLevel === 0}>
            1x
          </MapControlButton>
        </MapControls>
        {tiles.map((tile) => (
          <MapTile
            key={`${tile.x}-${tile.y}`}
            src={`https://tile.openstreetmap.org/${TILE_ZOOM}/${tile.x}/${tile.y}.png`}
            alt=""
            aria-hidden="true"
            draggable={false}
            $left={tile.left}
            $top={tile.top}
            $width={tile.width}
            $height={tile.height}
          />
        ))}
        {visibleMountains.map((mountain) => {
          const point = toMapPercent(mountain.latitude, mountain.longitude, mapBounds)
          const name = getLocalizedMountainName(mountain, locale)

          return (
            <MapPoint
              key={`${mountain.slug}-${mountain.latitude}-${mountain.longitude}`}
              href={toLocalizedPath(`/mountains/${mountain.slug}`, locale)}
              $x={point.x}
              $y={point.y}
              aria-label={name}
              title={name}
            />
          )
        })}
        <MapLegend>
          {t.MAP_LEGEND_PREFIX}
          {visibleMountains.length}
          {t.MAP_LEGEND_SUFFIX}
        </MapLegend>
        <MapCredit href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          OpenStreetMap
        </MapCredit>
      </MapCanvas>
    </MapSection>
  )
}

export default MountainMap
