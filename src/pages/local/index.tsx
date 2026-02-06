import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import Layout from '@/layouts/localList'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocale } from '../../i18n/index'

const Local: NextPage = () => {
  const { t } = useLocale()

  return (
    <Layout>
      <VerticalTextBoldLink>
        <Link href={'/'}>{t.TITLE}</Link>
        <i></i>
      </VerticalTextBoldLink>
      <VerticalTextNormalLink>
        <Link href={'/local/hokkaido'}>{t.HOKKAIDO_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/tohoku'}>{t.TOHOKU_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kanto'}>{t.KANTO_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chubu'}>{t.TOHOKU_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kansai'}>{t.KANSAI_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chugoku'}>{t.CHUGOKU_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/shikoku'}>{t.SHIKOKU_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kyushu-okinawa'}>{t.KYUSHU_OKINAWA_REGION}</Link>
        <i></i>
      </VerticalTextNormalLink>
    </Layout>
  )
}

export default Local
