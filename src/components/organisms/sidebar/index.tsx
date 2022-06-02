import { MountainsData } from 'famous-mountains-in-japan'
import { Card, Text, TextBox } from './style'

type Props = {
  data: MountainsData
}

const EnhancedCard = ({ data }: Props): JSX.Element => {
  return (
    <Card>
      <TextBox>
        <Text>{data.no}</Text>
        <Text>{data.name}</Text>
        <Text>{data.kanaName}</Text>
        <Text>{data.elevation} m</Text>
        <Text>{data.mountainSystem}</Text>
        <Text>{data.prefectures}</Text>
        <Text>{data.remarks}</Text>
      </TextBox>
    </Card>
  )
}

export default EnhancedCard

