import { MountainsData } from 'famous-mountains-in-japan'
import { Card, TextBig, TextBox, TextSmall } from './style'

type Props = {
  data: MountainsData
}

const EnhancedCard = ({ data }: Props): JSX.Element => {
  return (
    <Card>
      <a
        href={`https://yamap.com/search/activities?keyword=${data.prefectures}%20${data.name}`}
        target="_blank"
        rel="noreferrer"
      >
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
      </a>
    </Card>
  )
}

export default EnhancedCard
