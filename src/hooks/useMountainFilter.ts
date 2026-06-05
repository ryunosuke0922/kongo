import type { SupportedLocale } from '@/i18n/index'
import {
  getLocalizedMountainName,
  getLocalizedPrefectureValues,
  getLocalizedSearchCandidates,
} from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { useEffect, useMemo, useState } from 'react'

export type SortType = 'no' | 'elevation-asc' | 'elevation-desc' | 'kana'
export type ElevationFilterType = 'all' | 'gte3000' | 'between2000_3000' | 'lt2000'

const normalizeText = (value: string): string => {
  return value.trim().toLowerCase()
}

const compareByKana = (
  a: UnifiedMountainData,
  b: UnifiedMountainData,
  locale: SupportedLocale,
): number => {
  const left = locale === 'ja' ? a.kanaName : getLocalizedMountainName(a, locale)
  const right = locale === 'ja' ? b.kanaName : getLocalizedMountainName(b, locale)

  return left.localeCompare(right, locale)
}

export const useMountainFilter = (mountains: UnifiedMountainData[], locale: SupportedLocale) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('no')
  const [prefectureFilter, setPrefectureFilter] = useState('all')
  const [elevationFilter, setElevationFilter] = useState<ElevationFilterType>('all')

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [searchQuery])

  const filteredMountains = useMemo(() => {
    const query = normalizeText(debouncedSearchQuery)
    const filtered =
      query.length === 0
        ? mountains
        : mountains.filter((mountain) => {
            const candidates = getLocalizedSearchCandidates(mountain, locale)

            return candidates.some((candidate) => normalizeText(candidate).includes(query))
          })

    const filteredByPrefecture =
      prefectureFilter === 'all'
        ? filtered
        : filtered.filter((mountain) => {
            const values = getLocalizedPrefectureValues(mountain, locale)

            return values.includes(prefectureFilter)
          })

    const filteredByElevation =
      elevationFilter === 'all'
        ? filteredByPrefecture
        : filteredByPrefecture.filter((mountain) => {
            if (elevationFilter === 'gte3000') {
              return mountain.elevation >= 3000
            }
            if (elevationFilter === 'between2000_3000') {
              return mountain.elevation >= 2000 && mountain.elevation < 3000
            }

            return mountain.elevation < 2000
          })

    const sorted = [...filteredByElevation]
    if (sortType === 'elevation-asc') {
      sorted.sort((a, b) => a.elevation - b.elevation)
    } else if (sortType === 'elevation-desc') {
      sorted.sort((a, b) => b.elevation - a.elevation)
    } else if (sortType === 'kana') {
      sorted.sort((a, b) => compareByKana(a, b, locale))
    }

    return sorted
  }, [debouncedSearchQuery, locale, mountains, sortType, prefectureFilter, elevationFilter])

  return {
    filteredMountains,
    searchQuery,
    setSearchQuery,
    sortType,
    setSortType,
    prefectureFilter,
    setPrefectureFilter,
    elevationFilter,
    setElevationFilter,
    resultCount: filteredMountains.length,
  }
}
