import { Heading3 } from '@/components/atoms/text/style'
import Card from '@/components/molecules/card'
import Layout from '@/layouts/local'
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'
import { useLocale } from '../../../i18n/index'

const Home: NextPage = () => {
  const { t } = useLocale()

  return (
    <Layout>
      <div className="main__content-title">
        <Heading3>{t.TOHOKU_REGION}</Heading3>
      </div>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 10 ||
            e.no === 11 ||
            e.no === 12 ||
            e.no === 13 ||
            e.no === 14 ||
            e.no === 15 ||
            e.no === 16 ||
            e.no === 17 ||
            e.no === 18 ||
            e.no === 19 ||
            e.no === 20 ||
            e.no === 21 ||
            e.no === 22 ||
            e.no === 23 ||
            e.no === 24 ||
            e.no === 28,
        )
        .map((e) => (
          <div key={e.no}>
            <Card data={e}></Card>
          </div>
        ))}
    </Layout>
  )
}

export default Home
