import hyakukozanData from '@/data/hyakukozan.json'
import hyakuteizanData from '@/data/hyakuteizan.json'
import mountainsData from '@/data/mountains.json'
import nihyakumeizanData from '@/data/nihyakumeizan.json'
import sambyakumeizanData from '@/data/sambyakumeizan.json'
import type {
  MountainListFilter,
  MountainListId,
  MountainListMeta,
  MountainsData,
  UnifiedMountainData,
  YamapBadgeMountainData,
} from '@/types/mountains'

export const MOUNTAIN_LISTS: MountainListMeta[] = [
  {
    id: 'hyakumeizan',
    labelJa: '日本百名山',
    labelEn: '100 Famous Japanese Mountains',
    labelZhCN: '日本百名山',
    labelZhTW: '日本百名山',
    descriptionJa: '深田久弥が選定した日本百名山100座。',
    descriptionEn: 'The 100 Famous Japanese Mountains selected by Hisaya Fukada.',
    descriptionZhCN: '深田久弥评选的日本百名山100座。',
    descriptionZhTW: '深田久彌選定的日本百名山100座。',
    path: '/lists/hyakumeizan',
  },
  {
    id: 'nihyakumeizan',
    labelJa: '日本二百名山',
    labelEn: '200 Famous Japanese Mountains',
    labelZhCN: '日本二百名山',
    labelZhTW: '日本二百名山',
    descriptionJa: '日本百名山に続く名山を含む日本二百名山。',
    descriptionEn: 'The extended list of 200 notable mountains in Japan.',
    descriptionZhCN: '包含日本百名山之后名山的日本二百名山。',
    descriptionZhTW: '包含日本百名山之後名山的日本二百名山。',
    path: '/lists/nihyakumeizan',
  },
  {
    id: 'sambyakumeizan',
    labelJa: '日本三百名山',
    labelEn: '300 Famous Japanese Mountains',
    labelZhCN: '日本三百名山',
    labelZhTW: '日本三百名山',
    descriptionJa: 'さらに広く日本の名山を探せる日本三百名山。',
    descriptionEn: 'A broader collection of 300 famous mountains across Japan.',
    descriptionZhCN: '可更广泛查找日本名山的日本三百名山。',
    descriptionZhTW: '可更廣泛查找日本名山的日本三百名山。',
    path: '/lists/sambyakumeizan',
  },
  {
    id: 'hyakukozan',
    labelJa: '日本百高山',
    labelEn: '100 Highest Mountains of Japan',
    labelZhCN: '日本百高山',
    labelZhTW: '日本百高山',
    descriptionJa: '日本の標高上位100座を集めた日本百高山。',
    descriptionEn: 'A list of the 100 highest mountains in Japan.',
    descriptionZhCN: '汇集日本海拔前100座山岳的日本百高山。',
    descriptionZhTW: '彙整日本標高前100座山岳的日本百高山。',
    path: '/lists/hyakukozan',
  },
  {
    id: 'hyakuteizan',
    labelJa: '日本百低山',
    labelEn: '100 Low Mountains of Japan',
    labelZhCN: '日本百低山',
    labelZhTW: '日本百低山',
    descriptionJa: '低山ハイクや旅行中の山歩きに向いた日本百低山。',
    descriptionEn: 'A list of lower mountains in Japan suited for hiking and travel.',
    descriptionZhCN: '适合低山健行与旅行途中登山的日本百低山。',
    descriptionZhTW: '適合低山健行與旅行途中登山的日本百低山。',
    path: '/lists/hyakuteizan',
  },
]

export const ALL_MOUNTAIN_LIST_FILTER = 'all' satisfies MountainListFilter
const HYAKUTEIZAN_DISPLAY_LIMIT = 100

export const getMountainListMeta = (id: MountainListId): MountainListMeta => {
  const meta = MOUNTAIN_LISTS.find((list) => list.id === id)

  if (!meta) {
    throw new Error(`Unknown mountain list: ${id}`)
  }

  return meta
}

export const slugifyMountainName = (nameEn: string, nameJa: string): string => {
  const base = (nameEn || nameJa)
    .toLowerCase()
    .replace(/mt\./g, 'mount')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return base || encodeURIComponent(nameJa)
}

const toPrefecturesEn = (value: string): string => {
  return value
    .replace(/東京都/g, 'Tokyo')
    .replace(/北海道/g, 'Hokkaido')
    .replace(/青森/g, 'Aomori')
    .replace(/岩手/g, 'Iwate')
    .replace(/宮城/g, 'Miyagi')
    .replace(/秋田/g, 'Akita')
    .replace(/山形/g, 'Yamagata')
    .replace(/福島/g, 'Fukushima')
    .replace(/茨城/g, 'Ibaraki')
    .replace(/栃木/g, 'Tochigi')
    .replace(/群馬/g, 'Gunma')
    .replace(/埼玉/g, 'Saitama')
    .replace(/千葉/g, 'Chiba')
    .replace(/神奈川/g, 'Kanagawa')
    .replace(/新潟/g, 'Niigata')
    .replace(/富山/g, 'Toyama')
    .replace(/石川/g, 'Ishikawa')
    .replace(/福井/g, 'Fukui')
    .replace(/山梨/g, 'Yamanashi')
    .replace(/長野/g, 'Nagano')
    .replace(/岐阜/g, 'Gifu')
    .replace(/静岡/g, 'Shizuoka')
    .replace(/愛知/g, 'Aichi')
    .replace(/三重/g, 'Mie')
    .replace(/滋賀/g, 'Shiga')
    .replace(/京都/g, 'Kyoto')
    .replace(/大阪/g, 'Osaka')
    .replace(/兵庫/g, 'Hyogo')
    .replace(/奈良/g, 'Nara')
    .replace(/和歌山/g, 'Wakayama')
    .replace(/鳥取/g, 'Tottori')
    .replace(/島根/g, 'Shimane')
    .replace(/岡山/g, 'Okayama')
    .replace(/広島/g, 'Hiroshima')
    .replace(/山口/g, 'Yamaguchi')
    .replace(/徳島/g, 'Tokushima')
    .replace(/香川/g, 'Kagawa')
    .replace(/愛媛/g, 'Ehime')
    .replace(/高知/g, 'Kochi')
    .replace(/福岡/g, 'Fukuoka')
    .replace(/佐賀/g, 'Saga')
    .replace(/長崎/g, 'Nagasaki')
    .replace(/熊本/g, 'Kumamoto')
    .replace(/大分/g, 'Oita')
    .replace(/宮崎/g, 'Miyazaki')
    .replace(/鹿児島/g, 'Kagoshima')
    .replace(/沖縄/g, 'Okinawa')
    .replace(/県/g, '')
    .replace(/府/g, '')
    .replace(/都/g, '')
}

const normalizeBadgeMountain = (
  mountain: YamapBadgeMountainData,
  listId: MountainListId,
): UnifiedMountainData => {
  const meta = getMountainListMeta(listId)

  return {
    no: mountain.no,
    name: mountain.name,
    kanaName: mountain.kanaName,
    elevation: mountain.elevation,
    mountainSystem: '',
    prefectures: mountain.prefectures,
    nameEn: mountain.nameEn,
    prefecturesEn: toPrefecturesEn(mountain.prefectures),
    longitude: mountain.longitude,
    latitude: mountain.latitude,
    yamapUrl: mountain.yamapUrl,
    remarks: mountain.remarks,
    slug: slugifyMountainName(mountain.nameEn, mountain.name),
    listIds: [listId],
    listLabelsJa: [meta.labelJa],
    listLabelsEn: [meta.labelEn],
    listLabelsZhCN: [meta.labelZhCN],
    listLabelsZhTW: [meta.labelZhTW],
    ...(mountain.yamapLandmarkId ? { yamapLandmarkId: mountain.yamapLandmarkId } : {}),
  }
}

const normalizeHyakumeizanMountain = (mountain: MountainsData): UnifiedMountainData => {
  const meta = getMountainListMeta('hyakumeizan')

  return {
    ...mountain,
    slug: slugifyMountainName(mountain.nameEn, mountain.name),
    listIds: ['hyakumeizan'],
    listLabelsJa: [meta.labelJa],
    listLabelsEn: [meta.labelEn],
    listLabelsZhCN: [meta.labelZhCN],
    listLabelsZhTW: [meta.labelZhTW],
  }
}

const getMergeKey = (mountain: UnifiedMountainData): string => {
  return mountain.yamapLandmarkId
    ? `yamap:${mountain.yamapLandmarkId}`
    : `name:${mountain.name}:${mountain.elevation}`
}

const cloneMountain = (mountain: UnifiedMountainData): UnifiedMountainData => ({
  ...mountain,
  listIds: [...mountain.listIds],
  listLabelsJa: [...mountain.listLabelsJa],
  listLabelsEn: [...mountain.listLabelsEn],
  listLabelsZhCN: [...mountain.listLabelsZhCN],
  listLabelsZhTW: [...mountain.listLabelsZhTW],
})

const hyakumeizanMountains = (mountainsData as MountainsData[]).map(normalizeHyakumeizanMountain)

const hyakukozanMountains = (hyakukozanData as YamapBadgeMountainData[]).map((mountain) =>
  normalizeBadgeMountain(mountain, 'hyakukozan'),
)

const nihyakumeizanMountains = (nihyakumeizanData as YamapBadgeMountainData[]).map((mountain) =>
  normalizeBadgeMountain(mountain, 'nihyakumeizan'),
)

const sambyakumeizanMountains = (sambyakumeizanData as YamapBadgeMountainData[]).map((mountain) =>
  normalizeBadgeMountain(mountain, 'sambyakumeizan'),
)

const hyakuteizanMountains = (hyakuteizanData as YamapBadgeMountainData[])
  .slice(0, HYAKUTEIZAN_DISPLAY_LIMIT)
  .map((mountain) => normalizeBadgeMountain(mountain, 'hyakuteizan'))

const getRawMountainsByList = (listId: MountainListId): UnifiedMountainData[] => {
  if (listId === 'hyakumeizan') {
    return hyakumeizanMountains
  }
  if (listId === 'hyakukozan') {
    return hyakukozanMountains
  }
  if (listId === 'nihyakumeizan') {
    return nihyakumeizanMountains
  }
  if (listId === 'sambyakumeizan') {
    return sambyakumeizanMountains
  }

  return hyakuteizanMountains
}

const mergeMountain = (
  map: Map<string, UnifiedMountainData>,
  mountain: UnifiedMountainData,
): void => {
  const key = getMergeKey(mountain)
  const existing = map.get(key)

  if (!existing) {
    map.set(key, cloneMountain(mountain))

    return
  }

  mountain.listIds.forEach((listId) => {
    if (!existing.listIds.includes(listId)) {
      existing.listIds.push(listId)
      const meta = getMountainListMeta(listId)
      existing.listLabelsJa.push(meta.labelJa)
      existing.listLabelsEn.push(meta.labelEn)
      existing.listLabelsZhCN.push(meta.labelZhCN)
      existing.listLabelsZhTW.push(meta.labelZhTW)
    }
  })
}

export const getAllMountains = (): UnifiedMountainData[] => {
  const map = new Map<string, UnifiedMountainData>()

  hyakumeizanMountains.forEach((mountain) => {
    mergeMountain(map, mountain)
  })
  nihyakumeizanMountains.forEach((mountain) => {
    mergeMountain(map, mountain)
  })
  sambyakumeizanMountains.forEach((mountain) => {
    mergeMountain(map, mountain)
  })
  hyakukozanMountains.forEach((mountain) => {
    mergeMountain(map, mountain)
  })
  hyakuteizanMountains.forEach((mountain) => {
    mergeMountain(map, mountain)
  })

  const usedSlugs = new Map<string, number>()

  return Array.from(map.values()).map((mountain) => {
    const count = usedSlugs.get(mountain.slug) ?? 0
    usedSlugs.set(mountain.slug, count + 1)

    if (count === 0) {
      return mountain
    }

    return {
      ...mountain,
      slug: `${mountain.slug}-${count}`,
    }
  })
}

const toListScopedMountain = (mountain: UnifiedMountainData, no: number): UnifiedMountainData => {
  return {
    ...mountain,
    no,
  }
}

export const getMountainsByList = (listId: MountainListFilter): UnifiedMountainData[] => {
  const mountains = getAllMountains()

  if (listId === 'all') {
    return mountains
  }

  const mountainsByKey = new Map(mountains.map((mountain) => [getMergeKey(mountain), mountain]))

  return getRawMountainsByList(listId).map((mountain, index) => {
    const mergedMountain = mountainsByKey.get(getMergeKey(mountain)) ?? mountain

    return toListScopedMountain(mergedMountain, index + 1)
  })
}
