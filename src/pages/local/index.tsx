import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import Layout from '@/layouts/localList'
import type { NextPage } from 'next'
import Link from 'next/link'

const Local: NextPage = () => {
  return (
    <Layout>
      <VerticalTextBoldLink>
        <Link href={'/'} passHref>
          <a>日本百名山</a>
        </Link>
        <i></i>
      </VerticalTextBoldLink>
      <VerticalTextNormalLink>
        <Link href={'/local/hokkaido'} passHref>
          <a>北海道地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/tohoku'} passHref>
          <a>東北地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kanto'} passHref>
          <a>関東地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chubu'} passHref>
          <a>中部地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kansai'} passHref>
          <a>関西地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chugoku'} passHref>
          <a>中国地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/shikoku'} passHref>
          <a>四国地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kyushu-okinawa'} passHref>
          <a>九州・沖縄地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
    </Layout>
  )
}

export default Local
