import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/localList'
import Seo from '@/components/molecules/seo'
import { REGIONS } from '@/constants/regions'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocale } from '../../i18n/index'

const Local: NextPage = () => {
  const { t } = useLocale()

  return (
    <Layout seo={<Seo pagePath="/local" />}>
      <nav aria-labelledby="region-heading">
        <VerticalTextBoldLink as="h1" id="region-heading">
          {t.REGION_INDEX_HEADING}
        </VerticalTextBoldLink>
        {REGIONS.map((link) => (
          <VerticalTextNormalLink key={link.path}>
            <Link href={link.path}>{t[link.labelKey]}</Link>
            <i></i>
          </VerticalTextNormalLink>
        ))}
      </nav>
    </Layout>
  )
}

export default Local
