import { Heading3 } from '@/components/atoms/text/style'
import Card from '@/components/molecules/card'
import Layout from '@/layouts/local'
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="main__content-title">
        <Heading3>中国地方</Heading3>
      </div>
      {get100FamousMountainsInJapan()
        .filter((e) => e.no === 92)
        .map((e) => (
          <div key={e.no}>
            <Card data={e}></Card>
          </div>
        ))}
    </Layout>
  )
}

export default Home
