import type { SupportedLocale } from '@/i18n/index'
import type { MountainListMeta, UnifiedMountainData } from '@/types/mountains'

const zhCNMap: Record<string, string> = {
  亜: '亚',
  悪: '恶',
  圧: '压',
  囲: '围',
  隠: '隐',
  栄: '荣',
  駅: '驿',
  塩: '盐',
  奥: '奥',
  横: '横',
  温: '温',
  仮: '假',
  価: '价',
  画: '画',
  会: '会',
  海: '海',
  岳: '岳',
  楽: '乐',
  釜: '釜',
  鎌: '镰',
  関: '关',
  館: '馆',
  巌: '岩',
  岩: '岩',
  亀: '龟',
  気: '气',
  祇: '祇',
  橋: '桥',
  郷: '乡',
  暁: '晓',
  駒: '驹',
  勲: '勋',
  渓: '溪',
  経: '经',
  鶏: '鸡',
  芸: '艺',
  県: '县',
  剣: '剑',
  権: '权',
  厳: '严',
  戸: '户',
  御: '御',
  広: '广',
  鉱: '矿',
  高: '高',
  国: '国',
  黒: '黑',
  済: '济',
  斎: '斋',
  崎: '崎',
  桜: '樱',
  残: '残',
  糸: '丝',
  児: '儿',
  鹿: '鹿',
  実: '实',
  写: '写',
  社: '社',
  釈: '释',
  寿: '寿',
  縦: '纵',
  渋: '涩',
  獣: '兽',
  松: '松',
  焼: '烧',
  証: '证',
  乗: '乘',
  浄: '净',
  畳: '叠',
  縄: '绳',
  壌: '壤',
  穣: '穰',
  神: '神',
  図: '图',
  吹: '吹',
  数: '数',
  瀬: '濑',
  聖: '圣',
  跡: '迹',
  浅: '浅',
  戦: '战',
  専: '专',
  巣: '巢',
  荘: '庄',
  蒼: '苍',
  増: '增',
  蔵: '藏',
  属: '属',
  続: '续',
  台: '台',
  滝: '泷',
  沢: '泽',
  谷: '谷',
  団: '团',
  遅: '迟',
  竜: '龙',
  龍: '龙',
  猪: '猪',
  頂: '顶',
  鳥: '鸟',
  塚: '冢',
  鶴: '鹤',
  鉄: '铁',
  転: '转',
  伝: '传',
  都: '都',
  嶋: '岛',
  島: '岛',
  東: '东',
  闘: '斗',
  徳: '德',
  栃: '枥',
  奈: '奈',
  廃: '废',
  梅: '梅',
  売: '卖',
  麦: '麦',
  鳩: '鸠',
  浜: '滨',
  飯: '饭',
  飛: '飞',
  姫: '姬',
  富: '富',
  仏: '佛',
  峯: '峰',
  鳳: '凤',
  宝: '宝',
  豊: '丰',
  霧: '雾',
  名: '名',
  明: '明',
  妙: '妙',
  無: '无',
  門: '门',
  薬: '药',
  藪: '薮',
  弥: '弥',
  与: '与',
  葉: '叶',
  様: '样',
  洋: '洋',
  来: '来',
  嵐: '岚',
  覧: '览',
  裏: '里',
  涼: '凉',
  稜: '棱',
  嶺: '岭',
  礼: '礼',
  鈴: '铃',
  連: '连',
  炉: '炉',
  湾: '湾',
}

const zhTWMap: Record<string, string> = {
  亜: '亞',
  悪: '惡',
  圧: '壓',
  囲: '圍',
  隠: '隱',
  栄: '榮',
  駅: '驛',
  塩: '鹽',
  奥: '奧',
  横: '橫',
  温: '溫',
  仮: '假',
  価: '價',
  画: '畫',
  会: '會',
  楽: '樂',
  鎌: '鐮',
  関: '關',
  館: '館',
  巌: '巖',
  岩: '岩',
  亀: '龜',
  気: '氣',
  祇: '祇',
  橋: '橋',
  郷: '鄉',
  暁: '曉',
  駒: '駒',
  勲: '勳',
  渓: '溪',
  経: '經',
  鶏: '雞',
  芸: '藝',
  県: '縣',
  剣: '劍',
  権: '權',
  厳: '嚴',
  戸: '戶',
  広: '廣',
  鉱: '礦',
  国: '國',
  黒: '黑',
  済: '濟',
  斎: '齋',
  桜: '櫻',
  残: '殘',
  糸: '絲',
  児: '兒',
  実: '實',
  写: '寫',
  釈: '釋',
  寿: '壽',
  縦: '縱',
  渋: '澀',
  獣: '獸',
  焼: '燒',
  証: '證',
  乗: '乘',
  浄: '淨',
  畳: '疊',
  縄: '繩',
  壌: '壤',
  穣: '穰',
  図: '圖',
  数: '數',
  瀬: '瀨',
  聖: '聖',
  跡: '跡',
  浅: '淺',
  戦: '戰',
  専: '專',
  巣: '巢',
  荘: '莊',
  蒼: '蒼',
  増: '增',
  蔵: '藏',
  属: '屬',
  続: '續',
  台: '臺',
  滝: '瀧',
  沢: '澤',
  団: '團',
  遅: '遲',
  竜: '龍',
  龍: '龍',
  猪: '豬',
  頂: '頂',
  鳥: '鳥',
  塚: '塚',
  鶴: '鶴',
  鉄: '鐵',
  転: '轉',
  伝: '傳',
  嶋: '島',
  徳: '德',
  栃: '栃',
  廃: '廢',
  売: '賣',
  麦: '麥',
  鳩: '鳩',
  浜: '濱',
  飯: '飯',
  飛: '飛',
  姫: '姬',
  仏: '佛',
  峯: '峰',
  鳳: '鳳',
  宝: '寶',
  豊: '豐',
  霧: '霧',
  無: '無',
  門: '門',
  薬: '藥',
  藪: '藪',
  弥: '彌',
  与: '與',
  葉: '葉',
  様: '樣',
  来: '來',
  嵐: '嵐',
  覧: '覽',
  裏: '裏',
  涼: '涼',
  稜: '稜',
  嶺: '嶺',
  礼: '禮',
  鈴: '鈴',
  連: '連',
  湾: '灣',
}

const convertJapaneseText = (value: string, locale: SupportedLocale): string => {
  if (locale === 'zh-CN') {
    return Array.from(value)
      .map((character) => zhCNMap[character] ?? character)
      .join('')
  }

  if (locale === 'zh-TW') {
    return Array.from(value)
      .map((character) => zhTWMap[character] ?? character)
      .join('')
  }

  return value
}

const PREFECTURE_ORDER_JA = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
] as const

const prefectureEnMap: Record<(typeof PREFECTURE_ORDER_JA)[number], string> = {
  北海道: 'Hokkaido',
  青森県: 'Aomori',
  岩手県: 'Iwate',
  宮城県: 'Miyagi',
  秋田県: 'Akita',
  山形県: 'Yamagata',
  福島県: 'Fukushima',
  茨城県: 'Ibaraki',
  栃木県: 'Tochigi',
  群馬県: 'Gunma',
  埼玉県: 'Saitama',
  千葉県: 'Chiba',
  東京都: 'Tokyo',
  神奈川県: 'Kanagawa',
  新潟県: 'Niigata',
  富山県: 'Toyama',
  石川県: 'Ishikawa',
  福井県: 'Fukui',
  山梨県: 'Yamanashi',
  長野県: 'Nagano',
  岐阜県: 'Gifu',
  静岡県: 'Shizuoka',
  愛知県: 'Aichi',
  三重県: 'Mie',
  滋賀県: 'Shiga',
  京都府: 'Kyoto',
  大阪府: 'Osaka',
  兵庫県: 'Hyogo',
  奈良県: 'Nara',
  和歌山県: 'Wakayama',
  鳥取県: 'Tottori',
  島根県: 'Shimane',
  岡山県: 'Okayama',
  広島県: 'Hiroshima',
  山口県: 'Yamaguchi',
  徳島県: 'Tokushima',
  香川県: 'Kagawa',
  愛媛県: 'Ehime',
  高知県: 'Kochi',
  福岡県: 'Fukuoka',
  佐賀県: 'Saga',
  長崎県: 'Nagasaki',
  熊本県: 'Kumamoto',
  大分県: 'Oita',
  宮崎県: 'Miyazaki',
  鹿児島県: 'Kagoshima',
  沖縄県: 'Okinawa',
}

export const getLocalizedPrefectureOrder = (locale: SupportedLocale): string[] => {
  if (locale === 'en') {
    return PREFECTURE_ORDER_JA.map((prefecture) => prefectureEnMap[prefecture])
  }

  return PREFECTURE_ORDER_JA.map((prefecture) => convertJapaneseText(prefecture, locale))
}

export const getLocalizedMountainName = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return mountain.nameEn
  }

  return convertJapaneseText(mountain.name, locale)
}

export const getLocalizedMountainSubName = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return mountain.name
  }
  if (locale === 'zh-CN' || locale === 'zh-TW') {
    return mountain.nameEn
  }

  return mountain.kanaName
}

export const getLocalizedPrefectures = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return mountain.prefecturesEn
  }

  return convertJapaneseText(mountain.prefectures, locale)
}

export const getLocalizedPrefectureValues = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string[] => {
  return getLocalizedPrefectures(mountain, locale)
    .split(/\s*(?:・|,|、)\s*/)
    .map((prefecture) => prefecture.trim())
    .filter((prefecture) => prefecture.length > 0)
}

export const getLocalizedListLabel = (list: MountainListMeta, locale: SupportedLocale): string => {
  if (locale === 'en') {
    return list.labelEn
  }
  if (locale === 'zh-CN') {
    return list.labelZhCN
  }
  if (locale === 'zh-TW') {
    return list.labelZhTW
  }

  return list.labelJa
}

export const getLocalizedListDescription = (
  list: MountainListMeta,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return list.descriptionEn
  }
  if (locale === 'zh-CN') {
    return list.descriptionZhCN
  }
  if (locale === 'zh-TW') {
    return list.descriptionZhTW
  }

  return list.descriptionJa
}

export const getLocalizedMountainListLabels = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string[] => {
  if (locale === 'en') {
    return mountain.listLabelsEn
  }
  if (locale === 'zh-CN') {
    return mountain.listLabelsZhCN
  }
  if (locale === 'zh-TW') {
    return mountain.listLabelsZhTW
  }

  return mountain.listLabelsJa
}

export const getLocalizedMountainSystem = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string => {
  return convertJapaneseText(mountain.mountainSystem, locale)
}

export const getLocalizedSearchCandidates = (
  mountain: UnifiedMountainData,
  locale: SupportedLocale,
): string[] => {
  return [
    mountain.name,
    mountain.nameEn,
    mountain.kanaName,
    mountain.prefectures,
    mountain.prefecturesEn,
    getLocalizedMountainName(mountain, locale),
    getLocalizedPrefectures(mountain, locale),
    ...mountain.listLabelsJa,
    ...mountain.listLabelsEn,
    ...mountain.listLabelsZhCN,
    ...mountain.listLabelsZhTW,
  ]
}
