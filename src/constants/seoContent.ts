import type { RegionLabelKey } from '@/constants/regionLinks'

export type RegionSeoContent = {
  labelKey: RegionLabelKey
  englishName: string
  englishTitle: string
  englishDescription: string
  japaneseDescription: string
}

export const REGION_SEO_CONTENT: Record<string, RegionSeoContent> = {
  '/local/hokkaido': {
    labelKey: 'HOKKAIDO_REGION',
    englishName: 'Hokkaido region',
    englishTitle: 'Hokkaido Mountains in Japan',
    englishDescription:
      "Explore Hokkaido's famous mountains in Japan, including Rishiri, Daisetsu, Tokachi, and other peaks from the 100 Famous Japanese Mountains.",
    japaneseDescription:
      '北海道地方に含まれる日本百名山を一覧で確認できます。利尻岳、大雪山、十勝岳などの山を探せます。',
  },
  '/local/tohoku': {
    labelKey: 'TOHOKU_REGION',
    englishName: 'Tohoku region',
    englishTitle: 'Tohoku Mountains in Japan',
    englishDescription:
      "Browse Tohoku's famous Japanese mountains, including Iwaki, Hakkoda, Iwate, Chokai, Gassan, Zao, Bandai, and other northern Japan peaks.",
    japaneseDescription:
      '東北地方に含まれる日本百名山を一覧で確認できます。岩木山、八甲田山、岩手山、鳥海山、月山などを探せます。',
  },
  '/local/kanto': {
    labelKey: 'KANTO_REGION',
    englishName: 'Kanto region',
    englishTitle: 'Kanto Mountains in Japan',
    englishDescription:
      'Find famous mountains near Tokyo and across Kanto, including Tsukuba, Nantai, Tanigawa, Kumotori, Tanzawa, Fuji, and nearby peaks.',
    japaneseDescription:
      '関東地方に含まれる日本百名山を一覧で確認できます。筑波山、男体山、谷川岳、雲取山、丹沢山、富士山などを探せます。',
  },
  '/local/chubu': {
    labelKey: 'CHUBU_REGION',
    englishName: 'Chubu region',
    englishTitle: 'Chubu and Japanese Alps Mountains',
    englishDescription:
      'Explore Chubu and Japanese Alps mountains, including Fuji, Tateyama, Hakusan, Yarigatake, Hotaka, Ontake, and many of Japan’s highest peaks.',
    japaneseDescription:
      '中部地方に含まれる日本百名山を一覧で確認できます。富士山、立山、白山、槍ヶ岳、穂高岳、御嶽山などを探せます。',
  },
  '/local/kansai': {
    labelKey: 'KANSAI_REGION',
    englishName: 'Kansai region',
    englishTitle: 'Kansai Mountains in Japan',
    englishDescription:
      'Browse famous mountains in Kansai, including Ibuki, Odaigahara, and Omine from the 100 Famous Japanese Mountains list.',
    japaneseDescription:
      '関西地方に含まれる日本百名山を一覧で確認できます。伊吹山、大台ヶ原山、大峰山を探せます。',
  },
  '/local/chugoku': {
    labelKey: 'CHUGOKU_REGION',
    englishName: 'Chugoku region',
    englishTitle: 'Chugoku Mountains in Japan',
    englishDescription:
      'Browse famous mountains in the Chugoku region, including Mount Daisen from the 100 Famous Japanese Mountains list.',
    japaneseDescription: '中国地方に含まれる日本百名山を一覧で確認できます。大山を探せます。',
  },
  '/local/shikoku': {
    labelKey: 'SHIKOKU_REGION',
    englishName: 'Shikoku region',
    englishTitle: 'Shikoku Mountains in Japan',
    englishDescription:
      'Find famous mountains in Shikoku, including Tsurugi and Ishizuchi from the 100 Famous Japanese Mountains list.',
    japaneseDescription:
      '四国地方に含まれる日本百名山を一覧で確認できます。剣山、石鎚山を探せます。',
  },
  '/local/kyushu-okinawa': {
    labelKey: 'KYUSHU_OKINAWA_REGION',
    englishName: 'Kyushu and Okinawa region',
    englishTitle: 'Kyushu Mountains in Japan',
    englishDescription:
      'Explore famous mountains in Kyushu and Okinawa, including Kuju, Sobo, Aso, Kirishima, Kaimon, and Miyanoura.',
    japaneseDescription:
      '九州・沖縄地方に含まれる日本百名山を一覧で確認できます。九重山、祖母山、阿蘇山、霧島山、開聞岳、宮之浦岳を探せます。',
  },
}
