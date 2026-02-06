import Card from '@/components/molecules/card'
import Layout from '@/layouts/top'
import type { MountainsData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'

type Props = {
  mountains: MountainsData[]
}

const Home: NextPage<Props> = ({ mountains }) => {
  return (
    <Layout>
      {mountains.map((e) => (
        <div key={e.no}>
          <Card data={e}></Card>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mountains: MountainsData[] = (await import('@/data/mountains.json')).default

  return {
    props: {
      mountains,
    },
  }
}

export default Home
