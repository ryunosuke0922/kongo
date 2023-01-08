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
        <Heading3>{t.HOKKAIDO_REGION}</Heading3>
      </div>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 1 ||
            e.no === 2 ||
            e.no === 3 ||
            e.no === 4 ||
            e.no === 5 ||
            e.no === 6 ||
            e.no === 7 ||
            e.no === 8 ||
            e.no === 9,
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
