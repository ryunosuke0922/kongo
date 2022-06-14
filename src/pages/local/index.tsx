import Layout from '@/layouts/top'
import type { NextPage } from 'next'
import NLink from 'next/link'

const Local: NextPage = () => {
  return (
    <Layout>
      <NLink href={'/'} passHref>
        <a>日本の百名山</a>
      </NLink>
      <NLink href={'/local/hokkaido'} passHref>
        <a>北海道地方</a>
      </NLink>
      <NLink href={'/local/tohoku'} passHref>
        <a>東北地方</a>
      </NLink>
      <NLink href={'/local/kanto'} passHref>
        <a>関東地方</a>
      </NLink>
      <NLink href={'/local/chubu'} passHref>
        <a>中部地方</a>
      </NLink>
      <NLink href={'/local/kansai'} passHref>
        <a>関西地方</a>
      </NLink>
      <NLink href={'/local/chugoku'} passHref>
        <a>関西地方</a>
      </NLink>
      <NLink href={'/local/shikoku'} passHref>
        <a>四国地方</a>
      </NLink>
      <NLink href={'/local/kyushu-okinawa'} passHref>
        <a>九州・沖縄地方</a>
      </NLink>
    </Layout>
  )
}

export default Local
