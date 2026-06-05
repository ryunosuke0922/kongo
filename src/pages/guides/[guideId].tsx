import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import MountainMap from '@/components/molecules/mountainMap'
import Seo from '@/components/molecules/seo'
import { PageLead } from '@/components/molecules/sharedSurfaces/style'
import { getAllMountains } from '@/constants/mountainLists'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import { getLocalizedMountainName, getLocalizedPrefectures } from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { toAbsoluteUrl, toLocalizedPath } from '@/utils/seoPaths'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type GuideId =
  | 'mountains-near-tokyo'
  | 'japanese-alps-mountains'
  | 'highest-mountains-in-japan'
  | 'low-mountains-in-japan'

type GuideMeta = {
  id: GuideId
  titleJa: string
  titleEn: string
  titleZhCN: string
  titleZhTW: string
  descriptionJa: string
  descriptionEn: string
  descriptionZhCN: string
  descriptionZhTW: string
}

type Props = {
  guide: GuideMeta
  mountains: UnifiedMountainData[]
}

const GUIDES: GuideMeta[] = [
  {
    id: 'mountains-near-tokyo',
    titleJa: '東京周辺の名山',
    titleEn: 'Mountains near Tokyo',
    titleZhCN: '东京周边名山',
    titleZhTW: '東京周邊名山',
    descriptionJa: '東京、神奈川、埼玉、山梨周辺の名山を集めました。',
    descriptionEn:
      'Find famous mountains near Tokyo for hiking, travel, and day trips around Kanto and Yamanashi.',
    descriptionZhCN: '汇集东京、神奈川、埼玉、山梨周边的名山。',
    descriptionZhTW: '彙整東京、神奈川、埼玉、山梨周邊的名山。',
  },
  {
    id: 'japanese-alps-mountains',
    titleJa: '日本アルプスの名山',
    titleEn: 'Japanese Alps mountains',
    titleZhCN: '日本阿尔卑斯名山',
    titleZhTW: '日本阿爾卑斯名山',
    descriptionJa: '長野、岐阜、富山、山梨、静岡周辺の日本アルプスの名山を集めました。',
    descriptionEn:
      'Explore famous mountains in the Japanese Alps, including peaks in Nagano, Gifu, Toyama, Yamanashi, and Shizuoka.',
    descriptionZhCN: '汇集长野、岐阜、富山、山梨、静冈周边的日本阿尔卑斯名山。',
    descriptionZhTW: '彙整長野、岐阜、富山、山梨、靜岡周邊的日本阿爾卑斯名山。',
  },
  {
    id: 'highest-mountains-in-japan',
    titleJa: '標高が高い日本の名山',
    titleEn: 'Highest famous mountains in Japan',
    titleZhCN: '日本高海拔名山',
    titleZhTW: '日本高標高名山',
    descriptionJa: '日本の名山リストから標高の高い山を探せます。',
    descriptionEn:
      'Compare the highest famous mountains in Japan across the 100, 200, and 300 famous mountain lists.',
    descriptionZhCN: '可从日本名山名单中查找海拔较高的山。',
    descriptionZhTW: '可從日本名山名單中查找標高較高的山。',
  },
  {
    id: 'low-mountains-in-japan',
    titleJa: '日本の低山',
    titleEn: 'Low mountains in Japan',
    titleZhCN: '日本低山',
    titleZhTW: '日本低山',
    descriptionJa: '旅行中の山歩きや低山ハイクに向いた山を探せます。',
    descriptionEn:
      'Find lower mountains in Japan that are useful for hiking ideas, travel planning, and local mountain walks.',
    descriptionZhCN: '可查找适合旅行途中登山与低山健行的山。',
    descriptionZhTW: '可查找適合旅行途中登山與低山健行的山。',
  },
]

const GUIDE_PREFECTURES: Record<GuideId, string[]> = {
  'mountains-near-tokyo': [
    '東京都',
    '東京',
    '神奈川',
    '埼玉',
    '山梨',
    'Tokyo',
    'Kanagawa',
    'Saitama',
    'Yamanashi',
  ],
  'japanese-alps-mountains': [
    '長野',
    '岐阜',
    '富山',
    '山梨',
    '静岡',
    'Nagano',
    'Gifu',
    'Toyama',
    'Yamanashi',
    'Shizuoka',
  ],
  'highest-mountains-in-japan': [],
  'low-mountains-in-japan': [],
}

const getGuideMountains = (guideId: GuideId): UnifiedMountainData[] => {
  const mountains = getAllMountains()

  if (guideId === 'highest-mountains-in-japan') {
    return [...mountains].sort((a, b) => b.elevation - a.elevation).slice(0, 40)
  }

  if (guideId === 'low-mountains-in-japan') {
    return mountains
      .filter((mountain) => mountain.listIds.includes('hyakuteizan') || mountain.elevation < 1500)
      .sort((a, b) => a.elevation - b.elevation)
      .slice(0, 60)
  }

  const prefectures = GUIDE_PREFECTURES[guideId]

  return mountains
    .filter((mountain) =>
      prefectures.some(
        (prefecture) =>
          mountain.prefectures.includes(prefecture) || mountain.prefecturesEn.includes(prefecture),
      ),
    )
    .slice(0, 80)
}

const getGuideTitle = (title: string, count: number, locale: SupportedLocale): string => {
  if (locale === 'en') {
    return `${title}: ${count} Japan Mountain Ideas`
  }
  if (locale === 'zh-CN') {
    return `${title}｜${count}座日本山岳`
  }
  if (locale === 'zh-TW') {
    return `${title}｜${count}座日本山岳`
  }

  return `${title}｜${count}座を一覧で探す`
}

const getGuideDescription = (
  description: string,
  count: number,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return `${description} Compare ${count} mountains by elevation, prefecture, map location, YAMAP links, and nearby peaks.`
  }
  if (locale === 'zh-CN') {
    return `${description}${count}座山可按海拔、都道府县、地图位置、YAMAP 与附近山岳比较。`
  }
  if (locale === 'zh-TW') {
    return `${description}${count}座山可依標高、都道府縣、地圖位置、YAMAP 與附近山岳比較。`
  }

  return `${description}${count}座を標高、都道府県、地図、YAMAP、近い山から比較できます。`
}

const GuidePage: NextPage<Props> = ({ guide, mountains }) => {
  const { t, locale } = useLocale()
  const heading =
    locale === 'en'
      ? guide.titleEn
      : locale === 'zh-CN'
        ? guide.titleZhCN
        : locale === 'zh-TW'
          ? guide.titleZhTW
          : guide.titleJa
  const lead =
    locale === 'en'
      ? guide.descriptionEn
      : locale === 'zh-CN'
        ? guide.descriptionZhCN
        : locale === 'zh-TW'
          ? guide.descriptionZhTW
          : guide.descriptionJa
  const title = getGuideTitle(heading, mountains.length, locale)
  const description = getGuideDescription(lead, mountains.length, locale)
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: heading,
    numberOfItems: mountains.length,
    itemListElement: mountains.map((mountain, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: toAbsoluteUrl(toLocalizedPath(`/mountains/${mountain.slug}`, locale)),
      item: {
        '@type': 'TouristAttraction',
        name: getLocalizedMountainName(mountain, locale),
        alternateName: locale === 'en' ? mountain.name : mountain.nameEn,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressRegion: getLocalizedPrefectures(mountain, locale),
        },
      },
    })),
  }

  return (
    <Layout
      seo={
        <Seo
          pageTitle={title}
          pageDescription={description}
          pagePath={toLocalizedPath(`/guides/${guide.id}`, locale)}
          breadcrumbs={[
            { name: t.TITLE, path: '/' },
            { name: heading, path: `/guides/${guide.id}` },
          ]}
          schemas={[guideSchema]}
        />
      }
    >
      <div className="main__content-title">
        <Heading3>{heading}</Heading3>
      </div>
      <PageLead>{lead}</PageLead>
      <MountainMap mountains={mountains} />
      <MountainCardList mountains={mountains} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: SUPPORTED_LOCALES.flatMap((locale) =>
      GUIDES.map((guide) => ({
        params: {
          guideId: guide.id,
        },
        locale,
      })),
    ),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const guideId = params?.guideId as GuideId
  const guide = GUIDES.find((item) => item.id === guideId)

  if (!guide) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      guide,
      mountains: getGuideMountains(guideId),
    },
  }
}

export default GuidePage
