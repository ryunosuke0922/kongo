import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import Layout from '@/layouts/localList'
import type { NextPage } from 'next'
import Link from 'next/link'

const Local: NextPage = () => {
  return (
    <Layout>
      <VerticalTextBoldLink>
        <Link href={'/'}>
          <a>日本の百名山</a>
        </Link>
        <i></i>
      </VerticalTextBoldLink>
      <VerticalTextNormalLink>
        <Link href={'/local/hokkaido'}>
          <a>北海道地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/tohoku'}>
          <a>東北地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kanto'}>
          <a>関東地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chubu'}>
          <a>中部地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kansai'}>
          <a>関西地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/chugoku'}>
          <a>中国地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/shikoku'}>
          <a>四国地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
      <VerticalTextNormalLink>
        <Link href={'/local/kyushu-okinawa'}>
          <a>九州・沖縄地方</a>
        </Link>
        <i></i>
      </VerticalTextNormalLink>
    </Layout>
  )
}

export default Local
