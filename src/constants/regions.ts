import type { LocaleMessages } from '@/i18n/ja'

type RegionLabelKey = Extract<keyof LocaleMessages, `${string}_REGION`>

export type RegionLink = {
  path: string
  labelKey: RegionLabelKey
}

type RegionDetails = {
  labelKey: RegionLabelKey
  mountainNumbers: number[]
  englishTitle: string
  englishDescription: string
  japaneseDescription: string
}

const regions: Record<string, RegionDetails> = {
  hokkaido: {
    labelKey: 'HOKKAIDO_REGION',
    mountainNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    englishTitle: 'Hokkaido Mountains in Japan',
    englishDescription:
      "Explore Hokkaido's famous mountains in Japan, including Rishiri, Daisetsu, Tokachi, and other peaks from the 100 Famous Japanese Mountains.",
    japaneseDescription:
      '北海道地方に含まれる日本百名山を一覧で確認できます。利尻岳、大雪山、十勝岳などの山を探せます。',
  },
  tohoku: {
    labelKey: 'TOHOKU_REGION',
    mountainNumbers: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28],
    englishTitle: 'Tohoku Mountains in Japan',
    englishDescription:
      "Browse Tohoku's famous Japanese mountains, including Iwaki, Hakkoda, Iwate, Chokai, Gassan, Zao, Bandai, and other northern Japan peaks.",
    japaneseDescription:
      '東北地方に含まれる日本百名山を一覧で確認できます。岩木山、八甲田山、岩手山、鳥海山、月山などを探せます。',
  },
  kanto: {
    labelKey: 'KANTO_REGION',
    mountainNumbers: [
      26, 29, 30, 36, 37, 38, 39, 40, 41, 42, 43, 44, 64, 65, 66, 67, 68, 69, 70, 71, 72, 77, 78,
      79, 80, 81,
    ],
    englishTitle: 'Kanto Mountains in Japan',
    englishDescription:
      'Find famous mountains near Tokyo and across Kanto, including Tsukuba, Nantai, Tanigawa, Kumotori, Tanzawa, Fuji, and nearby peaks.',
    japaneseDescription:
      '関東地方に含まれる日本百名山を一覧で確認できます。筑波山、男体山、谷川岳、雲取山、丹沢山、富士山などを探せます。',
  },
  chubu: {
    labelKey: 'CHUBU_REGION',
    mountainNumbers: [
      17, 19, 25, 26, 27, 30, 31, 32, 33, 34, 35, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    ],
    englishTitle: 'Chubu and Japanese Alps Mountains',
    englishDescription:
      'Explore Chubu and Japanese Alps mountains, including Fuji, Tateyama, Hakusan, Yarigatake, Hotaka, Ontake, and many of Japan’s highest peaks.',
    japaneseDescription:
      '中部地方に含まれる日本百名山を一覧で確認できます。富士山、立山、白山、槍ヶ岳、穂高岳、御嶽山などを探せます。',
  },
  kansai: {
    labelKey: 'KANSAI_REGION',
    mountainNumbers: [89, 90, 91],
    englishTitle: 'Kansai Mountains in Japan',
    englishDescription:
      'Browse famous mountains in Kansai, including Ibuki, Odaigahara, and Omine from the 100 Famous Japanese Mountains list.',
    japaneseDescription:
      '関西地方に含まれる日本百名山を一覧で確認できます。伊吹山、大台ヶ原山、大峰山を探せます。',
  },
  chugoku: {
    labelKey: 'CHUGOKU_REGION',
    mountainNumbers: [92],
    englishTitle: 'Chugoku Mountains in Japan',
    englishDescription:
      'Browse famous mountains in the Chugoku region, including Mount Daisen from the 100 Famous Japanese Mountains list.',
    japaneseDescription: '中国地方に含まれる日本百名山を一覧で確認できます。大山を探せます。',
  },
  shikoku: {
    labelKey: 'SHIKOKU_REGION',
    mountainNumbers: [93, 94],
    englishTitle: 'Shikoku Mountains in Japan',
    englishDescription:
      'Find famous mountains in Shikoku, including Tsurugi and Ishizuchi from the 100 Famous Japanese Mountains list.',
    japaneseDescription:
      '四国地方に含まれる日本百名山を一覧で確認できます。剣山、石鎚山を探せます。',
  },
  'kyushu-okinawa': {
    labelKey: 'KYUSHU_OKINAWA_REGION',
    mountainNumbers: [95, 96, 97, 98, 99, 100],
    englishTitle: 'Kyushu Mountains in Japan',
    englishDescription:
      'Explore famous mountains in Kyushu and Okinawa, including Kuju, Sobo, Aso, Kirishima, Kaimon, and Miyanoura.',
    japaneseDescription:
      '九州・沖縄地方に含まれる日本百名山を一覧で確認できます。九重山、祖母山、阿蘇山、霧島山、開聞岳、宮之浦岳を探せます。',
  },
}

export const REGIONS = Object.entries(regions).map(([slug, region]) => ({
  ...region,
  slug,
  path: `/local/${slug}`,
}))
