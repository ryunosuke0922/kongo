import type { UnifiedMountainData } from '@/types/mountains'
import { describe, expect, it } from 'vitest'
import { filterMountains, type ElevationFilterType } from './mountainFilter'

const fuji: UnifiedMountainData = {
  no: 72,
  slug: 'fuji',
  name: '富士山',
  nameEn: 'Mt. Fuji',
  kanaName: 'ふじさん',
  elevation: 3776,
  prefectures: '山梨県・静岡県',
  prefecturesEn: 'Yamanashi, Shizuoka',
  mountainSystem: '',
  latitude: 0,
  longitude: 0,
  remarks: '',
  listIds: ['hyakumeizan'],
  listLabelsJa: ['日本百名山'],
  listLabelsEn: ['100 Famous Japanese Mountains'],
  listLabelsZhCN: ['日本百名山'],
  listLabelsZhTW: ['日本百名山'],
}
const defaults = {
  searchQuery: '',
  prefectureFilter: 'all',
  elevationFilter: 'all',
  sortType: 'no',
} as const

describe('filterMountains', () => {
  const peaks = [3000, 1999, 2999, 2000].map((elevation) => ({ ...fuji, elevation }))

  it.each<[ElevationFilterType, number[]]>([
    ['all', [3000, 1999, 2999, 2000]],
    ['lt2000', [1999]],
    ['between2000_3000', [2999, 2000]],
    ['gte3000', [3000]],
  ])('includes the correct boundary elevations for %s', (elevationFilter, expected) => {
    const results = filterMountains(peaks, 'ja', { ...defaults, elevationFilter })
    expect(results.map((peak) => peak.elevation)).toEqual(expected)
  })

  it.each([
    ['ja', '  fUJi  ', '静岡県'],
    ['en', 'ふじ', 'Yamanashi'],
    ['zh-CN', 'famous', '山梨县'],
    ['zh-TW', '富士', '山梨縣'],
  ] as const)(
    'combines multilingual search, prefecture and elevation in %s',
    (locale, searchQuery, prefectureFilter) => {
      const filters = {
        ...defaults,
        searchQuery,
        prefectureFilter,
        elevationFilter: 'gte3000',
      } as const
      expect(filterMountains([fuji], locale, filters)).toEqual([fuji])
      expect(filterMountains([fuji], locale, { ...filters, elevationFilter: 'lt2000' })).toEqual([])
      expect(filterMountains([fuji], locale, { ...filters, prefectureFilter: 'Tokyo' })).toEqual([])
    },
  )

  it('sorts equal elevations stably and preserves the source order', () => {
    const lower = { ...fuji, elevation: 2000 }
    const tied = { ...fuji, slug: 'tied' }
    const mountains = Object.freeze([fuji, lower, tied])
    expect(filterMountains(mountains, 'ja', { ...defaults, sortType: 'elevation-asc' })).toEqual([
      lower,
      fuji,
      tied,
    ])
    expect(filterMountains(mountains, 'ja', { ...defaults, sortType: 'elevation-desc' })).toEqual([
      fuji,
      tied,
      lower,
    ])
    expect(filterMountains(mountains, 'ja', { ...defaults, searchQuery: '   ' })).toEqual([
      fuji,
      lower,
      tied,
    ])
  })

  it('uses kana in Japanese and the localized mountain name in English', () => {
    const second = { ...fuji, kanaName: 'あ', nameEn: 'Z' }
    const mountains = [fuji, second]
    const filters = { ...defaults, sortType: 'kana' } as const
    expect(filterMountains(mountains, 'ja', filters)).toEqual([second, fuji])
    expect(filterMountains(mountains, 'en', filters)).toEqual([fuji, second])
  })
})
