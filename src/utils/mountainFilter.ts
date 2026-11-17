import type { SupportedLocale } from '@/i18n/index'
import {
  getLocalizedMountainName,
  getLocalizedMountainSubName,
  getLocalizedPrefectureOrder,
  getLocalizedPrefectureValues,
  getLocalizedSearchCandidates,
} from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'

export type SortType = 'no' | 'elevation-asc' | 'elevation-desc' | 'kana'
export type ElevationFilterType = 'all' | 'gte3000' | 'between2000_3000' | 'lt2000'

type MountainFilters = {
  searchQuery: string
  prefectureFilter: string
  elevationFilter: ElevationFilterType
  sortType: SortType
}

const normalizeText = (value: string): string => {
  return value.trim().toLowerCase()
}

const compareByKana = (
  a: UnifiedMountainData,
  b: UnifiedMountainData,
  locale: SupportedLocale,
): number => {
  const left =
    locale === 'ja' ? getLocalizedMountainSubName(a, locale) : getLocalizedMountainName(a, locale)
  const right =
    locale === 'ja' ? getLocalizedMountainSubName(b, locale) : getLocalizedMountainName(b, locale)

  return left.localeCompare(right, locale)
}

const matchesElevation: Record<ElevationFilterType, (elevation: number) => boolean> = {
  all: () => true,
  lt2000: (elevation) => elevation < 2000,
  between2000_3000: (elevation) => elevation >= 2000 && elevation < 3000,
  gte3000: (elevation) => elevation >= 3000,
}

export const filterMountains = (
  mountains: readonly UnifiedMountainData[],
  locale: SupportedLocale,
  { searchQuery, prefectureFilter, elevationFilter, sortType }: MountainFilters,
): UnifiedMountainData[] => {
  const query = normalizeText(searchQuery)
  const inElevationRange = matchesElevation[elevationFilter]
  const filtered = mountains.filter((mountain) => {
    if (!inElevationRange(mountain.elevation)) {
      return false
    }
    if (
      prefectureFilter !== 'all' &&
      !getLocalizedPrefectureValues(mountain, locale).includes(prefectureFilter)
    ) {
      return false
    }

    return (
      !query ||
      getLocalizedSearchCandidates(mountain, locale).some((candidate) =>
        normalizeText(candidate).includes(query),
      )
    )
  })

  switch (sortType) {
    case 'elevation-asc':
      return filtered.sort((a, b) => a.elevation - b.elevation)
    case 'elevation-desc':
      return filtered.sort((a, b) => b.elevation - a.elevation)
    case 'kana':
      return filtered.sort((a, b) => compareByKana(a, b, locale))
    case 'no':
      return filtered
  }
}

export const getAvailablePrefectures = (
  mountains: readonly UnifiedMountainData[],
  locale: SupportedLocale,
): string[] => {
  const available = new Set(
    mountains.flatMap((mountain) => getLocalizedPrefectureValues(mountain, locale)),
  )

  return getLocalizedPrefectureOrder(locale).filter((value) => available.has(value))
}
