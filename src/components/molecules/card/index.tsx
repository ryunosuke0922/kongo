import { MountainsData } from 'famous-mountains-in-japan'
import { Card, TextBig, TextBox, TextSmall } from './style'

type Props = {
  data: MountainsData
}

const EnhancedCard = ({ data }: Props): JSX.Element => {
  return (
    <Card>
      <TextBox>
        <div>
          <TextSmall>{data.no}</TextSmall>
        </div>
        <div>
          <TextSmall>{data.prefectures}</TextSmall>
          <TextSmall>{data.mountainSystem}</TextSmall>
          <TextSmall>標高：{data.elevation} m</TextSmall>
        </div>
        <div>
          <TextBig>{data.name}</TextBig>
          <TextBig>{data.kanaName}</TextBig>
        </div>
      </TextBox>
    </Card>
  )
}

export default EnhancedCard
