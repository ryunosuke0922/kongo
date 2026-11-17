import Link from 'next/link'
import { getMountainFact } from '@/i18n/mountainFacts'
import { BREAKPOINTS } from '@/constants/breakpoints'
import { getMountainListMeta } from '@/constants/mountainLists'
import { getLocalizedListLabel } from '@/i18n/mountains'
import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import Seo from '@/components/molecules/seo'
import {
  PageLead,
  pillControl,
  pillHoverMotion,
  sectionPanel,
} from '@/components/molecules/sharedSurfaces/style'
import { formatElevation, getSummitName, GSI_ELEVATIONS_URL } from '@/i18n/summits'
import { getAllMountains } from '@/constants/mountainLists'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import {
  getLocalizedMountainName,
  getLocalizedMountainSubName,
  getLocalizedMountainTag,
  getLocalizedPrefectures,
} from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { toAbsoluteUrl, toLocalizedPath } from '@/utils/seoPaths'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'

type Props = {
  mountain: UnifiedMountainData
  nearbyMountains: UnifiedMountainData[]
  relatedMountains: UnifiedMountainData[]
}

const DetailPanel = styled.section`
  position: relative;
  ${sectionPanel}
`

const DetailList = styled.dl`
  display: grid;
  grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
  overflow-wrap: anywhere;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    grid-template-columns: minmax(0, 1fr);
  }
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

const getDetailTitle = (name: string, elevation: string, locale: SupportedLocale): string => {
  if (locale === 'en') return `${name}: Elevation (${elevation}) and Location`
  if (locale === 'zh-CN') return `${name}｜海拔 ${elevation} 与位置`
  if (locale === 'zh-TW') return `${name}｜標高 ${elevation} 與位置`

  return `${name}の標高は${elevation}｜場所と周辺の山`
}

const getDescription = (
  name: string,
  prefectures: string,
  elevation: string,
  summit: string | undefined,
  locale: SupportedLocale,
): string => {
  if (locale === 'en')
    return summit
      ? `${name} reaches ${elevation} above sea level at its highest point, ${summit}, in ${prefectures}, Japan.`
      : `${name} rises to ${elevation} above sea level in ${prefectures}, Japan.`
  if (locale === 'zh-CN')
    return summit
      ? `${name}位于日本${prefectures}，最高点为${summit}，海拔${elevation}。`
      : `${name}位于日本${prefectures}，海拔${elevation}。`
  if (locale === 'zh-TW')
    return summit
      ? `${name}位於日本${prefectures}，最高點為${summit}，標高${elevation}。`
      : `${name}位於日本${prefectures}，標高${elevation}。`

  return summit
    ? `${name}の最高地点は${summit}（標高${elevation}）です。${prefectures}にあります。`
    : `${name}の標高は${elevation}です。${prefectures}にあります。`
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

const MountainDetailPage: NextPage<Props> = ({ mountain, nearbyMountains, relatedMountains }) => {
  const { t, locale } = useLocale()
  const name = getLocalizedMountainName(mountain, locale)
  const subName = getLocalizedMountainSubName(mountain, locale)
  const prefectures = getLocalizedPrefectures(mountain, locale)
  const fact = getMountainFact(mountain.slug)
  const elevation = formatElevation(mountain.elevation, locale)
  const pagePath = toLocalizedPath(`/mountains/${mountain.slug}`, locale)
  const summit = getSummitName(mountain.slug, locale)
  const title = getDetailTitle(name, elevation, locale)
  const description =
    fact?.description[locale] ?? getDescription(name, prefectures, elevation, summit, locale)
  const yamapKeyword = encodeURIComponent(`${prefectures} ${name}`)
  const instagramTag = encodeURIComponent(getLocalizedMountainTag(mountain, locale))
  const mountainSchema = {
    '@context': 'https://schema.org',
    '@type': 'Mountain',
    '@id': toAbsoluteUrl(`/mountains/${mountain.slug}/#mountain`),
    mainEntityOfPage: toAbsoluteUrl(pagePath),
    name,
    alternateName: getLocalizedMountainName(mountain, locale === 'en' ? 'ja' : 'en'),
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
        <Heading3 as="h1">
          {name}
          <span>{subName}</span>
        </Heading3>
      </div>
      <PageLead>{description}</PageLead>
      {relatedMountains.length > 0 && (
        <LinkRow aria-label={t.DETAIL_RELATED}>
          {relatedMountains.map((related) => (
            <Link key={related.slug} href={toLocalizedPath(`/mountains/${related.slug}`, locale)}>
              {getLocalizedMountainName(related, locale)}
            </Link>
          ))}
        </LinkRow>
      )}
      <DetailPanel>
        <DetailList>
          <dt>{t.DETAIL_PREFECTURE}</dt>
          <dd>{prefectures}</dd>
          <dt>{t.DETAIL_ELEVATION}</dt>
          <dd>
            {elevation}
            {fact ? ` — ${fact.point[locale]}` : ''}
          </dd>
          {fact && (
            <>
              <dt>{t.DETAIL_POINT}</dt>
              <dd>{fact.point[locale]}</dd>
            </>
          )}
          <dt>{t.DETAIL_LISTS}</dt>
          <dd>
            {mountain.listIds.length ? (
              <LinkRow style={{ margin: 0 }}>
                {mountain.listIds.map((id) => {
                  const list = getMountainListMeta(id)

                  return (
                    <Link key={id} href={toLocalizedPath(list.path, locale)}>
                      {getLocalizedListLabel(list, locale)}
                    </Link>
                  )
                })}
              </LinkRow>
            ) : (
              t.DETAIL_NO_LIST
            )}
          </dd>
          <dt>{t.DETAIL_COORDINATES}</dt>
          <dd>
            {t.DETAIL_LATITUDE}: {mountain.latitude.toFixed(5)}, {t.DETAIL_LONGITUDE}:{' '}
            {mountain.longitude.toFixed(5)}
            {hasValidCoordinates(mountain) && (
              <LinkRow style={{ marginTop: UI_SPACE.sm }}>
                <a
                  href={`https://maps.gsi.go.jp/#15/${mountain.latitude}/${mountain.longitude}/&base=std&ls=std&vs=c1j0h0k0l0u0t0z0r0s0m0f1`}
                >
                  {t.DETAIL_MAP}
                </a>
              </LinkRow>
            )}
          </dd>
        </DetailList>
        {fact && (
          <>
            <LinkRow aria-label={t.DETAIL_SOURCES}>
              {fact.sources.map((source) => (
                <a key={source.url} href={source.url}>
                  {source.label}
                </a>
              ))}
            </LinkRow>
          </>
        )}
        {!fact && summit && (
          <PageLead>
            <a href={GSI_ELEVATIONS_URL}>{t.ELEVATION_SOURCE}</a>
          </PageLead>
        )}
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
      relatedMountains: (getMountainFact(mountain.slug)?.relatedSlugs ?? []).flatMap(
        (relatedSlug) => {
          const related = mountains.find((item) => item.slug === relatedSlug)

          return related ? [related] : []
        },
      ),
    },
  }
}

export default MountainDetailPage
