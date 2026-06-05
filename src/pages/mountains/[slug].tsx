import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import Seo from '@/components/molecules/seo'
import {
  compactPillTag,
  pillControl,
  pillHoverMotion,
  sectionPanel,
} from '@/components/molecules/sharedSurfaces/style'
import { getAllMountains } from '@/constants/mountainLists'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import {
  getLocalizedMountainListLabels,
  getLocalizedMountainName,
  getLocalizedMountainSubName,
  getLocalizedPrefectures,
} from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { toAbsoluteUrl, toLocalizedPath } from '@/utils/seoPaths'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'

type Props = {
  mountain: UnifiedMountainData
  nearbyMountains: UnifiedMountainData[]
}

const DetailPanel = styled.section`
  position: relative;
  ${sectionPanel}
`

const DetailList = styled.dl`
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: ${UI_SPACE.md} ${UI_SPACE.lg};
  margin: 0;

  dt {
    color: ${UI_COLORS.textMuted};
    font-size: 1.7rem;
    line-height: 1.6;
  }

  dd {
    min-width: 0;
    margin: 0;
    color: ${UI_COLORS.textPrimary};
    font-size: 1.9rem;
    line-height: 1.6;
  }
`

const DetailTagList = styled.ul`
  position: absolute;
  top: ${UI_SPACE.xl};
  right: ${UI_SPACE.xl};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${UI_SPACE.sm};
  max-width: 52rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

const DetailTag = styled.li`
  ${compactPillTag}
  margin: 0;
`

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${UI_SPACE.md};
  margin: ${UI_SPACE.xl} 0 0;

  a {
    ${pillControl}
    ${pillHoverMotion}
  }
`

const SectionTitle = styled.h2`
  width: 100%;
  margin: 0 0 ${UI_SPACE.lg};
  color: ${UI_COLORS.textPrimary};
  font-size: 2.4rem;
  line-height: 1.4;
`

const formatElevation = (value: number, locale: SupportedLocale): string => {
  return `${new Intl.NumberFormat(locale === 'ja' ? 'ja-JP' : locale).format(value)}m`
}

const getDetailTitle = (name: string, locale: SupportedLocale): string => {
  if (locale === 'en') {
    return `${name}: Elevation, Location and Nearby Mountains`
  }
  if (locale === 'zh-CN') {
    return `${name}｜海拔、位置、名山名单`
  }
  if (locale === 'zh-TW') {
    return `${name}｜標高、位置、名山名單`
  }

  return `${name}の標高・場所・名山リスト`
}

const getDescription = (
  name: string,
  prefectures: string,
  elevation: string,
  listLabels: string[],
  locale: SupportedLocale,
): string => {
  const listText = listLabels.join(locale === 'en' ? ', ' : '、')

  if (locale === 'en') {
    return `${name} is a ${elevation} mountain in ${prefectures}, Japan. See its famous mountain lists (${listText}), map coordinates, YAMAP link, Instagram tag, and nearby peaks.`
  }
  if (locale === 'zh-CN') {
    return `${name}是位于日本${prefectures}的${elevation}山岳。可查看所属名单（${listText}）、坐标、YAMAP、Instagram 与附近的山。`
  }
  if (locale === 'zh-TW') {
    return `${name}是位於日本${prefectures}的${elevation}山岳。可查看所屬名單（${listText}）、座標、YAMAP、Instagram 與附近的山。`
  }

  return `${name}は${prefectures}にある標高${elevation}の山です。${listText}、座標、YAMAP、Instagram、近い山を確認できます。`
}

const getLocalizedPagePath = (slug: string, locale: SupportedLocale): string => {
  return toLocalizedPath(`/mountains/${slug}`, locale)
}

const toRadians = (value: number): number => {
  return (value * Math.PI) / 180
}

const distanceKm = (a: UnifiedMountainData, b: UnifiedMountainData): number => {
  const radius = 6371
  const latitudeDiff = toRadians(b.latitude - a.latitude)
  const longitudeDiff = toRadians(b.longitude - a.longitude)
  const latitudeA = toRadians(a.latitude)
  const latitudeB = toRadians(b.latitude)
  const value =
    Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
    Math.cos(latitudeA) *
      Math.cos(latitudeB) *
      Math.sin(longitudeDiff / 2) *
      Math.sin(longitudeDiff / 2)

  return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value))
}

const hasValidCoordinates = (mountain: UnifiedMountainData): boolean => {
  return mountain.latitude !== 0 && mountain.longitude !== 0
}

const MountainDetailPage: NextPage<Props> = ({ mountain, nearbyMountains }) => {
  const { t, locale } = useLocale()
  const name = getLocalizedMountainName(mountain, locale)
  const subName = getLocalizedMountainSubName(mountain, locale)
  const prefectures = getLocalizedPrefectures(mountain, locale)
  const listLabels = getLocalizedMountainListLabels(mountain, locale)
  const elevation = formatElevation(mountain.elevation, locale)
  const pagePath = getLocalizedPagePath(mountain.slug, locale)
  const title = getDetailTitle(name, locale)
  const description = getDescription(name, prefectures, elevation, listLabels, locale)
  const yamapKeyword = encodeURIComponent(`${prefectures} ${name}`)
  const instagramTag = encodeURIComponent(name.replace(/\s+/g, ''))
  const mountainSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    alternateName: locale === 'en' ? mountain.name : mountain.nameEn,
    description,
    url: toAbsoluteUrl(pagePath),
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
      addressRegion: prefectures,
    },
    isPartOf: listLabels.map((label) => ({
      '@type': 'CreativeWork',
      name: label,
    })),
  }

  return (
    <Layout
      footerListId={mountain.listIds[0]}
      sidebarVariant={mountain.listIds.includes('hyakumeizan') ? 'regions' : 'lists'}
      seo={
        <Seo
          pageTitle={title}
          pageDescription={description}
          pagePath={pagePath}
          breadcrumbs={[
            { name: t.TITLE, path: '/' },
            { name, path: `/mountains/${mountain.slug}` },
          ]}
          schemas={[mountainSchema]}
        />
      }
    >
      <div className="main__content-title">
        <Heading3>
          {name}
          <span>{subName}</span>
        </Heading3>
      </div>
      <DetailPanel>
        <DetailTagList aria-label={t.DETAIL_LISTS}>
          {listLabels.map((label) => (
            <DetailTag key={label}>{label}</DetailTag>
          ))}
        </DetailTagList>
        <DetailList>
          <dt>{t.DETAIL_PREFECTURE}</dt>
          <dd>{prefectures}</dd>
          <dt>{t.DETAIL_ELEVATION}</dt>
          <dd>{elevation}</dd>
          <dt>{t.DETAIL_COORDINATES}</dt>
          <dd>
            {mountain.latitude.toFixed(5)}, {mountain.longitude.toFixed(5)}
          </dd>
        </DetailList>
        <LinkRow>
          <a
            href={
              mountain.yamapUrl || `https://yamap.com/search/activities?keyword=${yamapKeyword}`
            }
            target="_blank"
            rel="noreferrer"
          >
            {t.DETAIL_YAMAP}
          </a>
          <a
            href={`https://www.instagram.com/explore/tags/${instagramTag}/`}
            target="_blank"
            rel="noreferrer"
          >
            {t.DETAIL_INSTAGRAM}
          </a>
        </LinkRow>
      </DetailPanel>
      <SectionTitle>{t.DETAIL_NEARBY}</SectionTitle>
      <MountainCardList mountains={nearbyMountains} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: SUPPORTED_LOCALES.flatMap((locale) =>
      getAllMountains().map((mountain) => ({
        params: {
          slug: mountain.slug,
        },
        locale,
      })),
    ),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const mountains = getAllMountains()
  const slug = params?.slug as string
  const mountain = mountains.find((item) => item.slug === slug)

  if (!mountain) {
    return {
      notFound: true,
    }
  }

  const nearbyMountains = hasValidCoordinates(mountain)
    ? mountains
        .filter((item) => item.slug !== mountain.slug)
        .filter(hasValidCoordinates)
        .sort((a, b) => distanceKm(mountain, a) - distanceKm(mountain, b))
        .slice(0, 4)
    : []

  return {
    props: {
      mountain,
      nearbyMountains,
    },
  }
}

export default MountainDetailPage
