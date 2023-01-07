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
        <Link href={'/'} passHref>
          <a>{t.TITLE}</a>
        </Link>
        <i></i>
      </VerticalTextBoldLink>
      <VerticalTextNormalLink>
        <Link href={'/local/hokkaido'} passHref>
          <a>{t.HOKKAIDO_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/tohoku'} passHref>
          <a>{t.TOHOKU_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kanto'} passHref>
          <a>{t.KANTO_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chubu'} passHref>
          <a>{t.TOHOKU_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kansai'} passHref>
          <a>{t.KANSAI_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chugoku'} passHref>
          <a>{t.CHUGOKU_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/shikoku'} passHref>
          <a>{t.SHIKOKU_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kyushu-okinawa'} passHref>
          <a>{t.KYUSHU_OKINAWA_REGION}</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
    </Layout>
  )
}

export default Local
