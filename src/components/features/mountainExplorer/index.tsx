import {
  useMountainFilter,
  type ElevationFilterType,
  type SortType,
} from '@/hooks/useMountainFilter'
import { useLocale } from '@/i18n/index'
import FilterSelect from '@/components/molecules/filterSelect'
import MountainCardList from '@/components/molecules/mountainCardList'
import SearchBar from '@/components/molecules/searchBar'
import SortSelect from '@/components/molecules/sortSelect'
import type { MountainsData } from '@/types/mountains'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import {
  EmptyText,
  FilterControls,
  FilterItemMobileSpacing,
  FilterRowMobileStack,
  ResultSummary,
  StatsSummary,
} from './style'

type Props = {
  mountains: MountainsData[]
}

type QueryValue = string | string[] | undefined

const VALID_SORTS: SortType[] = ['no', 'elevation-asc', 'elevation-desc', 'kana']
const VALID_ELEVATIONS: ElevationFilterType[] = ['all', 'gte3000', 'between2000_3000', 'lt2000']

const firstQueryValue = (value: QueryValue): string => {
  if (Array.isArray(value)) {
    return value[0] ?? ''
  }

  return value ?? ''
}

const formatElevation = (value: number, locale: 'ja' | 'en'): string => {
  const formatter = new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'ja-JP')

  return `${formatter.format(value)}m`
}

const MountainExplorer = ({ mountains }: Props) => {
  const router = useRouter()
  const { t, locale } = useLocale()
  const syncKey = `${router.locale ?? ''}:${router.pathname}`
  const {
    filteredMountains,
    searchQuery,
    setSearchQuery,
    sortType,
    setSortType,
    prefectureFilter,
    setPrefectureFilter,
    elevationFilter,
    setElevationFilter,
    resultCount,
  } = useMountainFilter(mountains, locale)
  const [hydratedKey, setHydratedKey] = useState('')

  const sortOptions: { value: SortType; label: string }[] = [
    { value: 'no', label: t.SORT_NO },
    { value: 'elevation-desc', label: t.SORT_ELEVATION_DESC },
    { value: 'elevation-asc', label: t.SORT_ELEVATION_ASC },
    { value: 'kana', label: t.SORT_KANA },
  ]

  const prefectureOptions = useMemo(() => {
    const values = Array.from(
      new Set(
        mountains.map((mountain) =>
          locale === 'en' ? mountain.prefecturesEn.trim() : mountain.prefectures.trim(),
        ),
      ),
    ).filter((value) => value.length > 0)

    values.sort((a, b) => a.localeCompare(b, locale))

    return [
      { value: 'all', label: t.PREFECTURE_ALL },
      ...values.map((value) => ({ value, label: value })),
    ]
  }, [locale, mountains, t.PREFECTURE_ALL])

  const elevationOptions: { value: ElevationFilterType; label: string }[] = [
    { value: 'all', label: t.ELEVATION_ALL },
    { value: 'gte3000', label: t.ELEVATION_GTE_3000 },
    { value: 'between2000_3000', label: t.ELEVATION_2000_3000 },
    { value: 'lt2000', label: t.ELEVATION_LT_2000 },
  ]

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    const queryText = firstQueryValue(router.query.q)
    const sortFromQuery = firstQueryValue(router.query.sort)
    const prefectureFromQuery = firstQueryValue(router.query.pref)
    const elevationFromQuery = firstQueryValue(router.query.elev)

    const nextSort = VALID_SORTS.includes(sortFromQuery as SortType)
      ? (sortFromQuery as SortType)
      : 'no'
    const nextElevation = VALID_ELEVATIONS.includes(elevationFromQuery as ElevationFilterType)
      ? (elevationFromQuery as ElevationFilterType)
      : 'all'
    const hasPrefecture = prefectureOptions.some((option) => option.value === prefectureFromQuery)
    const nextPrefecture = hasPrefecture ? prefectureFromQuery : 'all'

    setSearchQuery(queryText)
    setSortType(nextSort)
    setPrefectureFilter(nextPrefecture)
    setElevationFilter(nextElevation)
    setHydratedKey(syncKey)
  }, [
    prefectureOptions,
    router.isReady,
    router.query.elev,
    router.query.pref,
    router.query.q,
    router.query.sort,
    setElevationFilter,
    setPrefectureFilter,
    setSearchQuery,
    setSortType,
    syncKey,
  ])

  useEffect(() => {
    if (!router.isReady || hydratedKey !== syncKey) {
      return
    }

    const nextQuery: Record<string, string> = {}
    const trimmedQuery = searchQuery.trim()

    if (trimmedQuery.length > 0) {
      nextQuery.q = trimmedQuery
    }
    if (sortType !== 'no') {
      nextQuery.sort = sortType
    }
    if (prefectureFilter !== 'all') {
      nextQuery.pref = prefectureFilter
    }
    if (elevationFilter !== 'all') {
      nextQuery.elev = elevationFilter
    }

    const current = {
      q: firstQueryValue(router.query.q),
      sort: firstQueryValue(router.query.sort) || 'no',
      pref: firstQueryValue(router.query.pref) || 'all',
      elev: firstQueryValue(router.query.elev) || 'all',
    }
    const next = {
      q: nextQuery.q ?? '',
      sort: nextQuery.sort ?? 'no',
      pref: nextQuery.pref ?? 'all',
      elev: nextQuery.elev ?? 'all',
    }

    if (JSON.stringify(current) === JSON.stringify(next)) {
      return
    }

    void router.replace(
      {
        pathname: router.pathname,
        query: nextQuery,
      },
      undefined,
      {
        shallow: true,
        scroll: false,
      },
    )
  }, [elevationFilter, hydratedKey, prefectureFilter, router, searchQuery, sortType, syncKey])

  const hasSearchQuery = searchQuery.trim().length > 0
  const hasActiveFilters =
    sortType !== 'no' || prefectureFilter !== 'all' || elevationFilter !== 'all'
  const shouldShowResult = hasSearchQuery || hasActiveFilters
  const resultText =
    locale === 'en'
      ? `${t.SEARCH_RESULT_LABEL}: ${resultCount} ${t.SEARCH_RESULT}`
      : `${t.SEARCH_RESULT_LABEL}: ${resultCount}${t.SEARCH_RESULT}`

  const statistics = useMemo(() => {
    if (filteredMountains.length === 0) {
      return null
    }

    const highest = filteredMountains.reduce((current, mountain) =>
      mountain.elevation > current.elevation ? mountain : current,
    )
    const lowest = filteredMountains.reduce((current, mountain) =>
      mountain.elevation < current.elevation ? mountain : current,
    )
    const total = filteredMountains.reduce((sum, mountain) => sum + mountain.elevation, 0)
    const average = Math.round(total / filteredMountains.length)

    return {
      highest,
      lowest,
      average,
    }
  }, [filteredMountains])

  const statsText = statistics
    ? `${t.STATS_HIGHEST}: ${locale === 'en' ? statistics.highest.nameEn : statistics.highest.name} ${formatElevation(statistics.highest.elevation, locale)} / ${t.STATS_LOWEST}: ${locale === 'en' ? statistics.lowest.nameEn : statistics.lowest.name} ${formatElevation(statistics.lowest.elevation, locale)} / ${t.STATS_AVERAGE}: ${formatElevation(statistics.average, locale)}`
    : null

  return (
    <>
      <FilterControls className="main__content-controls">
        <FilterRowMobileStack>
          <FilterItemMobileSpacing $grow>
            <SearchBar
              value={searchQuery}
              placeholder={t.SEARCH_PLACEHOLDER}
              ariaLabel={t.SEARCH_PLACEHOLDER}
              clearAriaLabel={t.SEARCH_CLEAR_ARIA}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </FilterItemMobileSpacing>
          <FilterItemMobileSpacing>
            <FilterSelect
              value={prefectureFilter}
              label={t.PREFECTURE_LABEL}
              options={prefectureOptions}
              onChange={setPrefectureFilter}
            />
          </FilterItemMobileSpacing>
        </FilterRowMobileStack>
        <FilterRowMobileStack>
          <FilterItemMobileSpacing $grow>
            <SortSelect
              value={sortType}
              label={t.SORT_LABEL}
              options={sortOptions}
              onChange={(value) => setSortType(value as SortType)}
            />
          </FilterItemMobileSpacing>
          <FilterItemMobileSpacing $grow>
            <SortSelect
              value={elevationFilter}
              label={t.ELEVATION_LABEL}
              options={elevationOptions}
              onChange={(value) => setElevationFilter(value as ElevationFilterType)}
            />
          </FilterItemMobileSpacing>
        </FilterRowMobileStack>
      </FilterControls>
      {shouldShowResult ? <ResultSummary>{resultText}</ResultSummary> : null}
      {statsText ? (
        <StatsSummary className="main__content-statistics">{statsText}</StatsSummary>
      ) : null}
      {filteredMountains.length > 0 ? (
        <MountainCardList mountains={filteredMountains} />
      ) : (
        <EmptyText>{t.NO_SEARCH_RESULTS}</EmptyText>
      )}
    </>
  )
}

export default MountainExplorer
