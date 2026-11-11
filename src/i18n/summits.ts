import type { SupportedLocale } from './index'

// Summit names and elevations checked against the GSI table dated 2026-03-31.
export const GSI_ELEVATIONS_URL = 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html'

const summitNames: Record<string, Record<SupportedLocale, string> | undefined> = {
  asosan: { ja: '高岳', en: 'Takadake', 'zh-CN': '高岳', 'zh-TW': '高岳' },
  azuma: { ja: '西吾妻山', en: 'Nishi-Azuma', 'zh-CN': '西吾妻山', 'zh-TW': '西吾妻山' },
  fuji: { ja: '剣ヶ峯', en: 'Kengamine', 'zh-CN': '剑峰', 'zh-TW': '劍峰' },
  hakkoda: { ja: '大岳', en: 'Ōdake', 'zh-CN': '大岳', 'zh-TW': '大岳' },
  hotakadake: { ja: '奥穂高岳', en: 'Okuhotakadake', 'zh-CN': '奥穗高岳', 'zh-TW': '奧穗高岳' },
}

export const getSummitName = (slug: string, locale: SupportedLocale): string | undefined =>
  summitNames[slug]?.[locale]

export const formatElevation = (value: number, locale: SupportedLocale): string =>
  `${new Intl.NumberFormat(locale).format(value)} m`
