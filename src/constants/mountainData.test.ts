import { describe, expect, it } from 'vitest'
import { getAllMountains, getMountainsByList, selectHyakuteizan } from './mountainLists'
import { REGIONS, TOHOKU_COMPARISON_SLUGS } from './regions'
import lowData from '@/data/hyakuteizan.json'
import lowSelection from '@/data/hyakuteizan-selection.json'
import threeHundredData from '@/data/sambyakumeizan.json'
import threeHundredSource from '@/data/sambyakumeizan-source.json'
import { getMountainFact } from '@/i18n/mountainFacts'
import {
  getLocalizedMountainName,
  getLocalizedMountainSystem,
  getLocalizedMountainTag,
} from '@/i18n/mountains'
import { SUPPORTED_LOCALES } from '@/i18n/index'
import { filterMountains, getAvailablePrefectures } from '@/utils/mountainFilter'

const all = getAllMountains()
const bySlug = (slug: string) => {
  const mountain = all.find((item) => item.slug === slug)
  if (!mountain) throw new Error(`Missing mountain URL: ${slug}`)

  return mountain
}

describe('mountain selection and public URLs', () => {
  it('keeps disambiguation text out of the Instagram mountain tag', () => {
    expect(getLocalizedMountainTag(bySlug('fuji'), 'en')).toBe('MountFuji')
    expect(getLocalizedMountainTag(bySlug('fuji'), 'ja')).toBe('富士山')
    expect(getLocalizedMountainTag(bySlug('azuma'), 'en')).toBe('Azuma')
    expect(getLocalizedMountainTag(bySlug('be'), 'en')).toBe('Bessan')
    expect(getLocalizedMountainTag(bySlug('myoko'), 'zh-TW')).toBe('妙高山')
  })

  it('searches and sorts using the reading shown on the card', () => {
    const daisetsu = bySlug('daisetsuzan')
    const iwaki = bySlug('iwaki')
    const options = {
      searchQuery: 'たいせつざん',
      prefectureFilter: 'all',
      elevationFilter: 'all',
      sortType: 'kana',
    } as const
    expect(filterMountains([daisetsu, iwaki], 'ja', options)).toEqual([daisetsu])
    expect(filterMountains([daisetsu, iwaki], 'ja', { ...options, searchQuery: '' })).toEqual([
      iwaki,
      daisetsu,
    ])
  })

  it('reproduces the publisher’s 100 low mountains even when source order changes', () => {
    expect(selectHyakuteizan([...lowData].reverse())).toEqual(selectHyakuteizan(lowData))
    const selected = getMountainsByList('hyakuteizan')
    expect(selected).toHaveLength(100)
    expect(new Set(selected.map((m) => m.yamapLandmarkId)).size).toBe(100)
    expect(selected.map((m) => m.yamapLandmarkId)).toEqual(lowSelection.map((s) => s.landmarkId))
    expect(selected.some((m) => m.yamapLandmarkId === 194310)).toBe(true)
    expect(selected.some((m) => m.yamapLandmarkId === 6163)).toBe(false)
    expect(all.find((m) => m.yamapLandmarkId === 6163)?.listIds).toEqual([])
    expect(() => selectHyakuteizan(lowData.filter((m) => m.yamapLandmarkId !== 194310))).toThrow()
  })

  it('has an explicit, unique official source entry for each of the 100 displayed three-hundred-list records', () => {
    expect(threeHundredSource).toHaveLength(100)
    expect(new Set(threeHundredSource.map((s) => s.sourceNumber)).size).toBe(100)
    expect(threeHundredSource.every((s) => s.sourceNumber >= 1 && s.sourceNumber <= 300)).toBe(true)
    expect(threeHundredSource.map((s) => s.landmarkId).sort()).toEqual(
      threeHundredData.map((m) => m.yamapLandmarkId).sort(),
    )
    expect(getMountainsByList('sambyakumeizan')).toHaveLength(100)
  })

  it('keeps corrected names on their existing URLs in every locale', () => {
    expect(getLocalizedMountainName(bySlug('makiyama'), 'en')).toBe('Mount Makihata')
    expect(getLocalizedMountainName(bySlug('shiribeshi'), 'en')).toBe('Mount Yotei')
    expect(getLocalizedMountainName(bySlug('be'), 'en')).toContain('Bessan')
    for (const mountain of all) {
      const fact = getMountainFact(mountain.slug)
      if (!fact) continue
      for (const slug of fact.relatedSlugs) expect(bySlug(slug).slug).toBe(slug)
      for (const locale of SUPPORTED_LOCALES) {
        expect(getLocalizedMountainName(mountain, locale)).toBe(fact.name[locale])
        expect(fact.point[locale]).not.toBe('')
        expect(fact.description[locale]).not.toBe('')
      }
    }
  })

  it.each([
    ['fuji', 3776, 35.360738, 138.727373],
    ['kurodake', 2986, 36.426363, 137.602779],
    ['kusatsu-shirane', 2171, 36.622923, 138.531722],
    ['be', 2880, 36.597537, 137.620403],
    ['mount-fugendake-mount-unzendake', 1359, 32.759909, 130.292147],
  ] as const)(
    'uses the named GSI measured point for %s',
    (slug, elevation, latitude, longitude) => {
      expect(bySlug(slug)).toMatchObject({ elevation, latitude, longitude })
    },
  )

  it('retains north-summit and Misen elevations instead of substituting higher peaks', () => {
    expect(bySlug('yakedake').elevation).toBe(2444)
    expect(bySlug('myoko').elevation).toBe(2446)
    expect(bySlug('daisen').elevation).toBe(1709)
    expect(getMountainFact('yakedake')?.name.ja).toContain('北峰')
    expect(getMountainFact('myoko')?.name['zh-TW']).toContain('北峰')
    expect(getMountainFact('daisen')?.point.ja).toContain('弥山')
  })

  it('retains memberships needed to navigate from detail pages', () => {
    expect(bySlug('chogatake').listIds).toContain('hyakukozan')
    expect(bySlug('nyukasayama').listIds).toContain('sambyakumeizan')
  })
})

describe('regional prefecture selection', () => {
  it('compares all three Tohoku peaks across the two named mountain ranges in English', () => {
    const selected = TOHOKU_COMPARISON_SLUGS.map(bySlug)
    expect(selected.map((m) => m.name)).toEqual(['八甲田山', '蔵王山', '早池峰'])
    expect(selected.map((m) => getLocalizedMountainSystem(m, 'en'))).toEqual([
      'Ou Mountains',
      'Ou Mountains',
      'Kitakami Mountains',
    ])
  })

  it.each(SUPPORTED_LOCALES)(
    'offers only local prefectures and keeps boundary mountains in %s',
    (locale) => {
      const region = REGIONS.find((item) => item.slug === 'chubu')!
      const mountains = getMountainsByList('hyakumeizan').filter((m) =>
        region.mountainNumbers.includes(m.no),
      )
      const prefecture = { ja: '長野県', en: 'Nagano', 'zh-CN': '长野县', 'zh-TW': '長野縣' }[
        locale
      ]
      expect(getAvailablePrefectures(mountains, locale)).toContain(prefecture)
      const filters = {
        searchQuery: '',
        prefectureFilter: prefecture,
        elevationFilter: 'all',
        sortType: 'no',
      } as const
      expect(filterMountains(mountains, locale, filters).some((m) => m.slug === 'yarigatake')).toBe(
        true,
      )
      expect(filterMountains(mountains, locale, { ...filters, prefectureFilter: 'all' })).toEqual(
        mountains,
      )
      expect(getAvailablePrefectures(mountains, locale)).not.toContain('Hokkaido')
    },
  )
})
