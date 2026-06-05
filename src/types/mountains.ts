export type MountainsData = {
  no: number
  name: string
  kanaName: string
  elevation: number
  mountainSystem: string
  prefectures: string
  nameEn: string
  prefecturesEn: string
  longitude: number
  latitude: number
  yamapLandmarkId?: number
  yamapLandmarkName?: string
  yamapLandmarkNameEn?: string
  yamapUrl?: string
  remarks: string
}

export type MountainListId =
  | 'hyakumeizan'
  | 'nihyakumeizan'
  | 'sambyakumeizan'
  | 'hyakukozan'
  | 'hyakuteizan'

export type MountainListFilter = 'all' | MountainListId

export type MountainListMeta = {
  id: MountainListId
  labelJa: string
  labelEn: string
  labelZhCN: string
  labelZhTW: string
  descriptionJa: string
  descriptionEn: string
  descriptionZhCN: string
  descriptionZhTW: string
  path: string
}

export type UnifiedMountainData = MountainsData & {
  slug: string
  listIds: MountainListId[]
  listLabelsJa: string[]
  listLabelsEn: string[]
  listLabelsZhCN: string[]
  listLabelsZhTW: string[]
}

export type YamapBadgeMountainData = {
  no: number
  yamapLandmarkId?: number
  yamapMountainId?: number
  name: string
  kanaName: string
  elevation: number
  prefectures: string
  nameEn: string
  longitude: number
  latitude: number
  yamapUrl: string
  remarks: string
}

export type HyakukozanData = YamapBadgeMountainData
export type HyakuteizanData = YamapBadgeMountainData
export type NihyakumeizanData = YamapBadgeMountainData
export type SambyakumeizanData = YamapBadgeMountainData
