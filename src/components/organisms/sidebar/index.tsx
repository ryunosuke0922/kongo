import { AsideContent } from '@/components/atoms/layout/style'
import { Heading3, TextLarge } from '@/components/atoms/text/style'

const Sidebar = (): JSX.Element => {
  return (
    <AsideContent>
      <Heading3>日本の百名山</Heading3>
      <TextLarge>北海道地方</TextLarge>
      <TextLarge>東北地方</TextLarge>
      <TextLarge>関東地方</TextLarge>
      <TextLarge>中部地方</TextLarge>
      <TextLarge>関西地方</TextLarge>
    </AsideContent>
  )
}

export default Sidebar
