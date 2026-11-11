import type { SupportedLocale } from '@/i18n/index'
import type { UnifiedMountainData } from '@/types/mountains'
import { filterMountains, type ElevationFilterType, type SortType } from '@/utils/mountainFilter'
import { useEffect, useMemo, useState } from 'react'

export type { ElevationFilterType, SortType } from '@/utils/mountainFilter'

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

  const filteredMountains = useMemo(
    () =>
      filterMountains(mountains, locale, {
        searchQuery: debouncedSearchQuery,
        sortType,
        prefectureFilter,
        elevationFilter,
      }),
    [debouncedSearchQuery, locale, mountains, sortType, prefectureFilter, elevationFilter],
  )

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
