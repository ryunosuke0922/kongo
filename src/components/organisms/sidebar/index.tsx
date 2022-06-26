import { AsideContent } from '@/layouts/top/style'
import NLink from 'next/link'
import { Heading3, Text } from './style'

const Sidebar = (): JSX.Element => {
  return (
    <AsideContent>
      <Heading3>
        <NLink href={'/'} passHref>
          <a>日本の百名山</a>
        </NLink>
      </Heading3>
      <Text>
        <NLink href={'/local/hokkaido'} passHref>
          <a>北海道地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/tohoku'} passHref>
          <a>東北地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/kanto'} passHref>
          <a>関東地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/chubu'} passHref>
          <a>中部地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/kansai'} passHref>
          <a>関西地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/chugoku'} passHref>
          <a>関西地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/shikoku'} passHref>
          <a>四国地方</a>
        </NLink>
      </Text>
      <Text>
        <NLink href={'/local/kyushu-okinawa'} passHref>
          <a>九州・沖縄地方</a>
        </NLink>
      </Text>
    </AsideContent>
  )
}

export default Sidebar
