import { getAvailablePrefectures } from '@/utils/mountainFilter'
import {
  useMountainFilter,
  type ElevationFilterType,
  type SortType,
} from '@/hooks/useMountainFilter'
import { useLocale, type SupportedLocale } from '@/i18n/index'
import { getLocalizedMountainName } from '@/i18n/mountains'
import FilterSelect from '@/components/molecules/filterSelect'
import MountainCardList from '@/components/molecules/mountainCardList'
import MountainListNav from '@/components/molecules/mountainListNav'
import MountainMap from '@/components/molecules/mountainMap'
import { Icon } from '@astryxdesign/core/Icon'
import { TextInput } from '@astryxdesign/core/TextInput'
import { Theme } from '@astryxdesign/core/theme'
import { InternationalizationProvider } from '@astryxdesign/core/i18n'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'
import type { MountainListId, UnifiedMountainData } from '@/types/mountains'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef } from 'react'
import {
  EmptyText,
  FilterControls,
  ResultSummary,
  SearchGuide,
  SearchGuideText,
  SearchGuideTitle,
  StatsSummary,
} from './style'

type Props = {
  mountains: UnifiedMountainData[]
  currentListId?: MountainListId
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

const firstPathQueryValue = (asPath: string, key: string): string => {
  const queryString = asPath.split('?')[1]?.split('#')[0]
  if (!queryString) {
    return ''
  }

  return new URLSearchParams(queryString).get(key) ?? ''
}

const queryValue = (value: QueryValue, asPath: string, key: string): string => {
  return firstQueryValue(value) || firstPathQueryValue(asPath, key)
}

const formatElevation = (value: number, locale: SupportedLocale): string => {
  const formatter = new Intl.NumberFormat(locale === 'ja' ? 'ja-JP' : locale)

  return `${formatter.format(value)}m`
}

const MountainExplorer = ({ mountains, currentListId = 'hyakumeizan' }: Props) => {
  const router = useRouter()
  const { t, locale } = useLocale()
  const syncKey = `${locale}:${router.pathname}`
  const hydratedPathRef = useRef('')
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

  const sortOptions: { value: SortType; label: string }[] = [
    { value: 'no', label: t.SORT_NO },
    { value: 'elevation-desc', label: t.SORT_ELEVATION_DESC },
    { value: 'elevation-asc', label: t.SORT_ELEVATION_ASC },
    { value: 'kana', label: t.SORT_KANA },
  ]

  const prefectureOptions = useMemo(() => {
    const values = getAvailablePrefectures(mountains, locale)

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
    const hydrationKey = `${syncKey}:${router.asPath}`

    if (!router.isReady || hydratedPathRef.current === hydrationKey) {
      return
    }

    const queryText = queryValue(router.query.q, router.asPath, 'q')
    const sortFromQuery = queryValue(router.query.sort, router.asPath, 'sort')
    const prefectureFromQuery = queryValue(router.query.pref, router.asPath, 'pref')
    const elevationFromQuery = queryValue(router.query.elev, router.asPath, 'elev')

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
    hydratedPathRef.current = hydrationKey
  }, [
    prefectureOptions,
    router.asPath,
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

  const hasSearchQuery = searchQuery.trim().length > 0
  const hasActiveFilters =
    sortType !== 'no' || prefectureFilter !== 'all' || elevationFilter !== 'all'
  const shouldShowResult = hasSearchQuery || hasActiveFilters
  const resultText = t.SEARCH_RESULT_COUNT.replace('{count}', resultCount.toLocaleString(locale))

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

  return (
    <>
      <SearchGuide aria-labelledby="mountain-search-guide-title">
        <SearchGuideTitle id="mountain-search-guide-title">{t.GUIDE_TITLE}</SearchGuideTitle>
        <SearchGuideText>{t.GUIDE_DESCRIPTION}</SearchGuideText>
        <MountainListNav currentListId={currentListId} />
        <Theme theme={neutralTheme} mode="light">
          <InternationalizationProvider
            locale={locale}
            overrides={{
              [locale]: {
                '@astryx.textInput.clearLabel': t.SEARCH_CLEAR_ARIA,
                '@astryx.inputClearButton.tooltip': t.SEARCH_CLEAR_ARIA,
              },
            }}
          >
            <FilterControls
              className="main__content-controls"
              role="search"
              aria-label={t.GUIDE_TITLE}
            >
              <TextInput
                label={t.SEARCH_PLACEHOLDER}
                type="search"
                enterKeyHint="search"
                startIcon={<Icon icon="search" />}
                value={searchQuery}
                onChange={setSearchQuery}
                hasClear
                controlClassName="mountain-search-input"
              />
              <FilterSelect
                value={prefectureFilter}
                label={t.PREFECTURE_LABEL}
                options={prefectureOptions}
                onChange={setPrefectureFilter}
              />
              <FilterSelect
                value={elevationFilter}
                label={t.ELEVATION_LABEL}
                options={elevationOptions}
                onChange={(value) => setElevationFilter(value as ElevationFilterType)}
              />
              <FilterSelect
                value={sortType}
                label={t.SORT_LABEL}
                options={sortOptions}
                onChange={(value) => setSortType(value as SortType)}
              />
            </FilterControls>
          </InternationalizationProvider>
        </Theme>
        {shouldShowResult ? <ResultSummary role="status">{resultText}</ResultSummary> : null}
        {statistics ? (
          <StatsSummary className="main__content-statistics">
            <div>
              <dt>{t.STATS_HIGHEST}</dt>
              <dd>
                {formatElevation(statistics.highest.elevation, locale)}
                <span>{getLocalizedMountainName(statistics.highest, locale)}</span>
              </dd>
            </div>
            <div>
              <dt>{t.STATS_LOWEST}</dt>
              <dd>
                {formatElevation(statistics.lowest.elevation, locale)}
                <span>{getLocalizedMountainName(statistics.lowest, locale)}</span>
              </dd>
            </div>
            <div>
              <dt>{t.STATS_AVERAGE}</dt>
              <dd>{formatElevation(statistics.average, locale)}</dd>
            </div>
          </StatsSummary>
        ) : null}
      </SearchGuide>
      <MountainMap mountains={filteredMountains} />
      {filteredMountains.length > 0 ? (
        <MountainCardList mountains={filteredMountains} showListLabel={false} />
      ) : (
        <EmptyText>{t.NO_SEARCH_RESULTS}</EmptyText>
      )}
    </>
  )
}

export default MountainExplorer
