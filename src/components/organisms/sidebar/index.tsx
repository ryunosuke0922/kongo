import Link from 'next/link'
import { AsideContent, Heading3, Text } from './style'

const Sidebar = (): JSX.Element => {
  return (
    <AsideContent>
      <Heading3>
        <Link href={'/'} passHref>
          <a>日本百名山</a>
        </Link>
        <i></i>
      </Heading3>
      <Text>
        <Link href={'/local/hokkaido'} passHref>
          <a>北海道地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/tohoku'} passHref>
          <a>東北地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kanto'} passHref>
          <a>関東地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chubu'} passHref>
          <a>中部地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kansai'} passHref>
          <a>関西地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chugoku'} passHref>
          <a>中国地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/shikoku'} passHref>
          <a>四国地方</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kyushu-okinawa'} passHref>
          <a>九州・沖縄地方</a>
        </Link>
        <i></i>
      </Text>
    </AsideContent>
  )
}

export default Sidebar
