import { MountainsData } from 'famous-mountains-in-japan'
import { Card, TextBox, TextId, TextMountain, TextName, TextWrapper } from './style'

type Props = {
  data: MountainsData
}

const EnhancedCard = ({ data }: Props): JSX.Element => {
  return (
    <Card>
      <TextBox>
        <TextWrapper>
          <TextId>{data.no}</TextId>
        </TextWrapper>
        <div>
          <TextMountain>{data.mountainSystem}</TextMountain>
          <TextMountain>{data.prefectures}</TextMountain>
          <TextMountain>
            標高：{data.elevation}
            <span>m</span>
          </TextMountain>
        </div>
        <div>
          <TextName>
            {data.name}
            <span>{data.kanaName}</span>
          </TextName>
        </div>
        <a
          href={`https://yamap.com/search/activities?keyword=${data.prefectures}%20${data.name}`}
          target="_blank"
          rel="noreferrer"
          className="link-yamap"
        >
          YAMAP
        </a>
        <a
          href={`https://www.instagram.com/explore/tags/${data.name}/`}
          target="_blank"
          rel="noreferrer"
          className="link-insta"
        >
          Instagram
        </a>
      </TextBox>
    </Card>
  )
}

export default EnhancedCard
