import { Heading3 } from '@/components/atoms/text/style'
import MountainCardList from '@/components/molecules/mountainCardList'
import Layout from '@/components/layouts/local'
import type { MountainsData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'
import { useLocale } from '../../../i18n/index'

type Props = {
  mountains: MountainsData[]
}

const Home: NextPage<Props> = ({ mountains }) => {
  const { t } = useLocale()

  return (
    <Layout>
      <div className="main__content-title">
        <Heading3>{t.TOHOKU_REGION}</Heading3>
      </div>
      <MountainCardList mountains={mountains} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allMountains: MountainsData[] = (await import('@/data/mountains.json')).default
  const ids = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28]
  const mountains = allMountains.filter((e) => ids.includes(e.no))

  return { props: { mountains } }
}

export default Home
