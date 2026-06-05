import { Heading3 } from '@/components/atoms/text/style'
import MountainCardList from '@/components/molecules/mountainCardList'
import Layout from '@/components/layouts/local'
import Seo from '@/components/molecules/seo'
import { getMountainsByList } from '@/constants/mountainLists'
import type { UnifiedMountainData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'
import { useLocale } from '../../../i18n/index'

type Props = {
  mountains: UnifiedMountainData[]
}

const Home: NextPage<Props> = ({ mountains }) => {
  const { t } = useLocale()

  return (
    <Layout seo={<Seo pagePath="/local/kyushu-okinawa" />}>
      <div className="main__content-title">
        <Heading3>{t.KYUSHU_OKINAWA_REGION}</Heading3>
      </div>
      <MountainCardList mountains={mountains} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allMountains = getMountainsByList('hyakumeizan')
  const ids = [95, 96, 97, 98, 99, 100]
  const mountains = allMountains.filter((e) => ids.includes(e.no))

  return { props: { mountains } }
}

export default Home
