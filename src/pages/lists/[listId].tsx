import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import MountainListNav from '@/components/molecules/mountainListNav'
import MountainMap from '@/components/molecules/mountainMap'
import Seo from '@/components/molecules/seo'
import { PageLead } from '@/components/molecules/sharedSurfaces/style'
import { getMountainListMeta, getMountainsByList, MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import {
  getLocalizedListDescription,
  getLocalizedListLabel,
  getLocalizedMountainName,
  getLocalizedPrefectures,
} from '@/i18n/mountains'
import type { MountainListId, UnifiedMountainData } from '@/types/mountains'
import { toAbsoluteUrl, toLocalizedPath } from '@/utils/seoPaths'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  listId: MountainListId
  mountains: UnifiedMountainData[]
}

const getListTitle = (label: string, count: number, locale: SupportedLocale): string => {
  if (locale === 'en') {
    return `${label} List: ${count} Peaks by Prefecture and Elevation`
  }
  if (locale === 'zh-CN') {
    return `${label}一览｜${count}座山按地区与海拔查找`
  }
  if (locale === 'zh-TW') {
    return `${label}一覽｜${count}座山依地區與標高查找`
  }

  return `${label}一覧｜${count}座を都道府県・標高で探す`
}

const getListDescription = (
  description: string,
  count: number,
  locale: SupportedLocale,
): string => {
  if (locale === 'en') {
    return `${description} Browse ${count} Japanese mountains by name, prefecture, elevation, map location, and nearby peaks.`
  }
  if (locale === 'zh-CN') {
    return `${description}${count}座山可按山名、都道府县、海拔、地图位置与附近山岳查找。`
  }
  if (locale === 'zh-TW') {
    return `${description}${count}座山可依山名、都道府縣、標高、地圖位置與附近山岳查找。`
  }

  return `${description}${count}座の山を山名、都道府県、標高、地図、近い山から探せます。`
}

const hasValidCoordinates = (mountain: UnifiedMountainData): boolean => {
  return mountain.latitude !== 0 && mountain.longitude !== 0
}

const ListPage: NextPage<Props> = ({ listId, mountains }) => {
  const { t, locale } = useLocale()
  const meta = getMountainListMeta(listId)
  const label = getLocalizedListLabel(meta, locale)
  const title = getListTitle(label, mountains.length, locale)
  const description = getListDescription(
    getLocalizedListDescription(meta, locale),
    mountains.length,
    locale,
  )
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: label,
    numberOfItems: mountains.length,
    itemListElement: mountains.map((mountain, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: toAbsoluteUrl(toLocalizedPath(`/mountains/${mountain.slug}`, locale)),
      item: {
        '@type': 'TouristAttraction',
        name: getLocalizedMountainName(mountain, locale),
        alternateName: locale === 'en' ? mountain.name : mountain.nameEn,
        ...(hasValidCoordinates(mountain)
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: mountain.latitude,
                longitude: mountain.longitude,
                elevation: mountain.elevation,
              },
            }
          : {}),
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
      footerListId={listId}
      sidebarVariant={listId === 'hyakumeizan' ? 'regions' : 'lists'}
      seo={
        <Seo
          pageTitle={title}
          pageDescription={description}
          pagePath={toLocalizedPath(meta.path, locale)}
          breadcrumbs={[
            { name: t.TITLE, path: '/' },
            { name: label, path: meta.path },
          ]}
          schemas={[listSchema]}
        />
      }
    >
      <div className="main__content-title">
        <Heading3>{label}</Heading3>
      </div>
      <PageLead>{description}</PageLead>
      <MountainListNav currentListId={listId} />
      <MountainMap mountains={mountains} />
      <MountainCardList mountains={mountains} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: SUPPORTED_LOCALES.flatMap((locale) =>
      MOUNTAIN_LISTS.map((list) => ({
        params: {
          listId: list.id,
        },
        locale,
      })),
    ),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const listId = params?.listId as MountainListId

  return {
    props: {
      listId,
      mountains: getMountainsByList(listId),
    },
  }
}

export default ListPage
