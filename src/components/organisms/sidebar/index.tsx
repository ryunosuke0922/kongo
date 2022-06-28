import { AsideContent } from '@/layouts/top/style'
import Link from 'next/link'
import { Heading3, Text } from './style'

const Sidebar = (): JSX.Element => {
  return (
    <AsideContent>
      <Heading3>
        <Link href={'/'}>
          <a>日本の百名山</a>
        </Link>
      </Heading3>
      <Text>
        <Link href={'/local/hokkaido'}>
          <a>北海道地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/tohoku'}>
          <a>東北地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/kanto'}>
          <a>関東地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/chubu'}>
          <a>中部地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/kansai'}>
          <a>関西地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/chugoku'}>
          <a>関西地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/shikoku'}>
          <a>四国地方</a>
        </Link>
      </Text>
      <Text>
        <Link href={'/local/kyushu-okinawa'}>
          <a>九州・沖縄地方</a>
        </Link>
      </Text>
    </AsideContent>
  )
}

export default Sidebar
