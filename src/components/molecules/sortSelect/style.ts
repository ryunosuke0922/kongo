import { BREAKPOINTS } from '@/constants/breakpoints'
import { ControlLabel } from '@/components/molecules/sharedControls/style'
import { activePillControl, pillHoverMotion } from '@/components/molecules/sharedSurfaces/style'
import { UI_SPACE } from '@/constants/ui'
import styled from 'styled-components'

export const SortWrapper = styled.div`
  width: 100%;
  display: block;
`

export const SortLabel = styled(ControlLabel)``

export const SortTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${UI_SPACE.sm};
`

export const SortTagButton = styled.button<{ $active: boolean }>`
  ${activePillControl}
  min-height: 5rem;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  ${pillHoverMotion}

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    min-height: 5.6rem;
    font-size: 2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    min-height: 50px;
    font-size: 16px;
    padding: 0 16px;
  }
`
