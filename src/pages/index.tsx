import MountainExplorer from '@/components/features/mountainExplorer'
import Layout from '@/components/layouts/top'
import { getMountainsByList } from '@/constants/mountainLists'
import type { UnifiedMountainData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'

type Props = {
  mountains: UnifiedMountainData[]
}

const Home: NextPage<Props> = ({ mountains }) => {
  return (
    <Layout>
      <MountainExplorer mountains={mountains} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mountains = getMountainsByList('hyakumeizan')

  return {
    props: {
      mountains,
    },
  }
}

export default Home
