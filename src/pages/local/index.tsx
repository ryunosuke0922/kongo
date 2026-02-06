import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import Layout from '@/components/layouts/localList'
import { REGION_LINKS } from '@/constants/regionLinks'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocale } from '../../i18n/index'

const Local: NextPage = () => {
  const { t } = useLocale()

  return (
    <Layout>
      <nav aria-label="Local area mountain navigation">
        <VerticalTextBoldLink>
          <Link href={'/'}>{t.TITLE}</Link>
          <i></i>
        </VerticalTextBoldLink>
        {REGION_LINKS.map((link) => (
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
