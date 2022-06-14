import { AsideContent } from '@/components/atoms/layout/style'
import { Heading3, TextLarge } from '@/components/atoms/text/style'
import NLink from 'next/link'

const Sidebar = (): JSX.Element => {
  return (
    <AsideContent>
      <Heading3>
        <NLink href={'/'} passHref>
          <a>日本の百名山</a>
        </NLink>
      </Heading3>
      <TextLarge>
        <NLink href={'/hokkaido'} passHref>
          <a>北海道地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/tohoku'} passHref>
          <a>東北地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/kanto'} passHref>
          <a>関東地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/chubu'} passHref>
          <a>中部地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/kansai'} passHref>
          <a>関西地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/chugoku'} passHref>
          <a>関西地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/shikoku'} passHref>
          <a>四国地方</a>
        </NLink>
      </TextLarge>
      <TextLarge>
        <NLink href={'/kyushu-okinawa'} passHref>
          <a>九州・沖縄地方</a>
        </NLink>
      </TextLarge>
    </AsideContent>
  )
}

export default Sidebar
