import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import RegionMountains from '@/components/features/regionMountains'
import MountainSummary from '@/components/molecules/mountainSummary'
import { PageLead } from '@/components/molecules/sharedSurfaces/style'
import Seo from '@/components/molecules/seo'
import { getMountainsByList } from '@/constants/mountainLists'
import { REGIONS, TOHOKU_COMPARISON_SLUGS, type RegionLink } from '@/constants/regions'
import { SUPPORTED_LOCALES, useLocale } from '@/i18n/index'
import type { UnifiedMountainData } from '@/types/mountains'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  region: RegionLink
  mountains: UnifiedMountainData[]
}

const RegionPage: NextPage<Props> = ({ region, mountains }) => {
  const { t, locale } = useLocale()
  const title = t.REGION_HEADING.replace('{region}', t[region.labelKey])
  const description = t.REGION_INTRO.replace('{region}', t[region.labelKey]).replace(
    '{count}',
    String(mountains.length),
  )
  const isTohoku = region.path === '/local/tohoku'
  const summaryMountains = isTohoku
    ? mountains.filter((mountain) => TOHOKU_COMPARISON_SLUGS.includes(mountain.slug))
    : region.path === '/local/kansai'
      ? mountains
      : []

  return (
    <Layout
      seo={
        <Seo
          pagePath={region.path}
          pageTitle={title}
          pageDescription={isTohoku ? `${t.TOHOKU_RANGES} ${description}` : description}
          mountains={mountains}
        />
      }
    >
      <div className="main__content-title">
        <Heading3 as="h1">{title}</Heading3>
      </div>
      <PageLead>{description}</PageLead>
      {isTohoku && <PageLead>{t.TOHOKU_RANGES}</PageLead>}
      {summaryMountains.length > 0 && (
        <MountainSummary mountains={summaryMountains} showSystem={isTohoku} />
      )}
      <RegionMountains key={`${locale}:${region.path}`} mountains={mountains} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SUPPORTED_LOCALES.flatMap((locale) =>
    REGIONS.map(({ slug }) => ({ params: { region: slug }, locale })),
  ),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const region = REGIONS.find(({ slug }) => slug === params?.region)
  if (!region) {
    return { notFound: true }
  }

  const mountains = getMountainsByList('hyakumeizan').filter((mountain) =>
    region.mountainNumbers.includes(mountain.no),
  )

  return { props: { region: { path: region.path, labelKey: region.labelKey }, mountains } }
}

export default RegionPage
