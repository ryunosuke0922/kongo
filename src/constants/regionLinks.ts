export type RegionLabelKey =
  | 'HOKKAIDO_REGION'
  | 'TOHOKU_REGION'
  | 'KANTO_REGION'
  | 'CHUBU_REGION'
  | 'KANSAI_REGION'
  | 'CHUGOKU_REGION'
  | 'SHIKOKU_REGION'
  | 'KYUSHU_OKINAWA_REGION'

export type RegionLink = {
  path: string
  labelKey: RegionLabelKey
}

export const REGION_LINKS: RegionLink[] = [
  { path: '/local/hokkaido', labelKey: 'HOKKAIDO_REGION' },
  { path: '/local/tohoku', labelKey: 'TOHOKU_REGION' },
  { path: '/local/kanto', labelKey: 'KANTO_REGION' },
  { path: '/local/chubu', labelKey: 'CHUBU_REGION' },
  { path: '/local/kansai', labelKey: 'KANSAI_REGION' },
  { path: '/local/chugoku', labelKey: 'CHUGOKU_REGION' },
  { path: '/local/shikoku', labelKey: 'SHIKOKU_REGION' },
  { path: '/local/kyushu-okinawa', labelKey: 'KYUSHU_OKINAWA_REGION' },
]
