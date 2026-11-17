import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'
import { useState } from 'react'
import FilterSelect from '@/components/molecules/filterSelect'
import MountainCardList from '@/components/molecules/mountainCardList'
import {
  FilterControls,
  ResultSummary,
  SearchGuide,
} from '@/components/features/mountainExplorer/style'
import { useLocale } from '@/i18n/index'
import { filterMountains, getAvailablePrefectures } from '@/utils/mountainFilter'
import type { UnifiedMountainData } from '@/types/mountains'

export default function RegionMountains({ mountains }: { mountains: UnifiedMountainData[] }) {
  const { t, locale } = useLocale()
  const [prefecture, setPrefecture] = useState('all')
  const options = getAvailablePrefectures(mountains, locale)
  const filtered = filterMountains(mountains, locale, {
    searchQuery: '',
    prefectureFilter: prefecture,
    elevationFilter: 'all',
    sortType: 'no',
  })

  return (
    <>
      <SearchGuide>
        <Theme theme={neutralTheme} mode="light">
          <FilterControls>
            <FilterSelect
              label={t.PREFECTURE_LABEL}
              value={prefecture}
              onChange={setPrefecture}
              options={[
                { value: 'all', label: t.PREFECTURE_ALL },
                ...options.map((value) => ({ value, label: value })),
              ]}
            />
          </FilterControls>
        </Theme>
        <ResultSummary role="status">
          {t.SEARCH_RESULT_COUNT.replace('{count}', String(filtered.length))}
        </ResultSummary>
      </SearchGuide>
      <MountainCardList mountains={filtered} />
    </>
  )
}
