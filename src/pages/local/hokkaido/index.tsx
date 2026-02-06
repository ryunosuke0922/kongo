import { Heading3 } from '@/components/atoms/text/style'
import Card from '@/components/molecules/card'
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
        <Heading3>{t.HOKKAIDO_REGION}</Heading3>
      </div>
      {mountains.map((e) => (
        <div key={e.no}>
          <Card data={e}></Card>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allMountains: MountainsData[] = (await import('@/data/mountains.json')).default
  const mountains = allMountains.filter((e) => e.no >= 1 && e.no <= 9)

  return { props: { mountains } }
}

export default Home
