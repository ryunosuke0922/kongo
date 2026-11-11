import { Heading3 } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/local'
import MountainCardList from '@/components/molecules/mountainCardList'
import Seo from '@/components/molecules/seo'
import { getMountainsByList } from '@/constants/mountainLists'
import { REGIONS, type RegionLink } from '@/constants/regions'
import { SUPPORTED_LOCALES, useLocale } from '@/i18n/index'
import type { UnifiedMountainData } from '@/types/mountains'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  region: RegionLink
  mountains: UnifiedMountainData[]
}

const RegionPage: NextPage<Props> = ({ region, mountains }) => {
  const { t } = useLocale()

  return (
    <Layout seo={<Seo pagePath={region.path} />}>
      <div className="main__content-title">
        <Heading3>{t[region.labelKey]}</Heading3>
      </div>
      <MountainCardList mountains={mountains} />
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
