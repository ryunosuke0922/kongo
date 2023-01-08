import { MountainsData } from 'famous-mountains-in-japan'
import { useLocale } from '../../../i18n/index'
import { Card, TextBox, TextId, TextMountain, TextName, TextWrapper } from './style'

type Props = {
  data: MountainsData
}

const EnhancedCard = ({ data }: Props): JSX.Element => {
  const { locale } = useLocale()

  return (
    <Card>
      <TextBox>
        <TextWrapper>
          <TextId>{data.no}</TextId>
        </TextWrapper>
        <div className="card__wrapper">
          <TextMountain>{data.mountainSystem}</TextMountain>
          <TextMountain>
            {data.prefectures}
            {locale === 'en' ? (
              <>
                <i>{data.prefecturesEn}</i>
              </>
            ) : (
              <></>
            )}
          </TextMountain>
        </div>
        <div className="card__wrapper">
          <TextName>
            {data.name}
            {locale === 'en' ? (
              <>
                <i>{data.nameEn}</i>
              </>
            ) : (
              <></>
            )}
            <span>{data.kanaName}</span>
          </TextName>
        </div>
        <div className="card__wrapper">
          <TextMountain>
            標高：{data.elevation}
            <span>m</span>
          </TextMountain>
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
