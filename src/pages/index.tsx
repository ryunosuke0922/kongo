import MountainExplorer from '@/components/features/mountainExplorer'
import Layout from '@/components/layouts/top'
import type { MountainsData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'

type Props = {
  mountains: MountainsData[]
}

const Home: NextPage<Props> = ({ mountains }) => {
  return (
    <Layout>
      <MountainExplorer mountains={mountains} />
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
