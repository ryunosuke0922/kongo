import Layout from '@/layouts/localList'
import type { NextPage } from 'next'
import Link from 'next/link'

const Local: NextPage = () => {
  return (
    <Layout>
      <Link href={'/'}>
        <a>日本の百名山</a>
      </Link>
      <Link href={'/local/hokkaido'}>
        <a>北海道地方</a>
      </Link>
      <Link href={'/local/tohoku'}>
        <a>東北地方</a>
      </Link>
      <Link href={'/local/kanto'}>
        <a>関東地方</a>
      </Link>
      <Link href={'/local/chubu'}>
        <a>中部地方</a>
      </Link>
      <Link href={'/local/kansai'}>
        <a>関西地方</a>
      </Link>
      <Link href={'/local/chugoku'}>
        <a>関西地方</a>
      </Link>
      <Link href={'/local/shikoku'}>
        <a>四国地方</a>
      </Link>
      <Link href={'/local/kyushu-okinawa'}>
        <a>九州・沖縄地方</a>
      </Link>
    </Layout>
  )
}

export default Local
