import { Heading3 } from '@/components/atoms/text/style'
import ElevationRanking from '@/components/molecules/elevationRanking'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import MountainListNav from '@/components/molecules/mountainListNav'
import MountainMap from '@/components/molecules/mountainMap'
import Seo from '@/components/molecules/seo'
import { PageLead } from '@/components/molecules/sharedSurfaces/style'
import { getMountainListMeta, getMountainsByList, MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import { getLocalizedListDescription, getLocalizedListLabel } from '@/i18n/mountains'
import type { MountainListId, UnifiedMountainData } from '@/types/mountains'
import { formatElevation } from '@/i18n/summits'
import { toLocalizedPath } from '@/utils/seoPaths'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { getListScope } from '@/i18n/listScopes'

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

const ListPage: NextPage<Props> = ({ listId, mountains }) => {
  const { t, locale } = useLocale()
  const meta = getMountainListMeta(listId)
  const label = getLocalizedListLabel(meta, locale)
  const scope = getListScope(listId, locale)
  const topPeaks = listId === 'hyakukozan' ? mountains.slice(0, 5) : null
  const title = topPeaks
    ? t.HIGHEST_TITLE
    : (scope?.title ?? getListTitle(label, mountains.length, locale))
  const description = topPeaks
    ? t.HIGHEST_INTRO.replace('{first}', formatElevation(topPeaks[0].elevation, locale)).replace(
        '{second}',
        formatElevation(topPeaks[1].elevation, locale),
      )
    : (scope?.note ??
      getListDescription(getLocalizedListDescription(meta, locale), mountains.length, locale))

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
          mountains={mountains}
          listName={scope?.title ?? label}
        />
      }
    >
      <div className="main__content-title">
        <Heading3 as="h1">{topPeaks ? t.HIGHEST_TITLE : (scope?.title ?? label)}</Heading3>
      </div>
      <PageLead>{description}</PageLead>
      {scope && (
        <PageLead>
          <a href={scope.sourceUrl}>{scope.sourceLabel}</a>
        </PageLead>
      )}
      {listId === 'sambyakumeizan' && (
        <PageLead>
          <Link href={toLocalizedPath('/lists/hyakukozan', locale)}>{t.HIGHEST_TITLE}</Link>
        </PageLead>
      )}
      {topPeaks && <ElevationRanking peaks={topPeaks} />}
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

  const mountains = getMountainsByList(listId)
  if (listId === 'hyakukozan') mountains.sort((a, b) => b.elevation - a.elevation)

  return {
    props: {
      listId,
      mountains,
    },
  }
}

export default ListPage
