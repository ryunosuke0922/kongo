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
        <Heading3>{t.KANTO_REGION}</Heading3>
      </div>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 26 ||
            e.no === 29 ||
            e.no === 30 ||
            e.no === 36 ||
            e.no === 37 ||
            e.no === 38 ||
            e.no === 39 ||
            e.no === 40 ||
            e.no === 41 ||
            e.no === 42 ||
            e.no === 43 ||
            e.no === 44 ||
            e.no === 64 ||
            e.no === 65 ||
            e.no === 66 ||
            e.no === 67 ||
            e.no === 68 ||
            e.no === 69 ||
            e.no === 70 ||
            e.no === 71 ||
            e.no === 72 ||
            e.no === 77 ||
            e.no === 78 ||
            e.no === 79 ||
            e.no === 80 ||
            e.no === 81,
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
