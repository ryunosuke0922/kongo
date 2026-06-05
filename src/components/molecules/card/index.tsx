import { UnifiedMountainData } from '@/types/mountains'
import { toLocalizedPath } from '@/utils/seoPaths'
import { useRouter } from 'next/router'
import type { KeyboardEvent, MouseEvent } from 'react'
import { useLocale } from '../../../i18n/index'
import {
  getLocalizedMountainListLabels,
  getLocalizedMountainName,
  getLocalizedMountainSubName,
  getLocalizedMountainSystem,
  getLocalizedPrefectures,
} from '../../../i18n/mountains'
import {
  Card,
  DetailLink,
  ListLabel,
  TextBox,
  TextId,
  TextMountain,
  TextName,
  TextWrapper,
} from './style'

type Props = {
  data: UnifiedMountainData
  showListLabel?: boolean
}

const EnhancedCard = ({ data, showListLabel = true }: Props) => {
  const { t, locale } = useLocale()
  const router = useRouter()
  const name = getLocalizedMountainName(data, locale)
  const subName = getLocalizedMountainSubName(data, locale)
  const prefectures = getLocalizedPrefectures(data, locale)
  const mountainSystem = getLocalizedMountainSystem(data, locale)
  const listLabels = getLocalizedMountainListLabels(data, locale)
  const detailHref = toLocalizedPath(`/mountains/${data.slug}`, locale)
  const yamapKeyword = encodeURIComponent(`${prefectures} ${name}`)
  const instagramTag = encodeURIComponent(name.replace(/\s+/g, ''))

  const openDetail = async () => {
    await router.push(detailHref)
  }

  const handleCardClick = async (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      return
    }

    await openDetail()
  }

  const handleCardKeyDown = async (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }
    if (event.target instanceof Element && event.target.closest('a')) {
      return
    }

    event.preventDefault()
    await openDetail()
  }

  return (
    <Card
      role="link"
      tabIndex={0}
      aria-label={`${name} ${t.DETAIL_LINK}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <TextBox>
        <TextWrapper>
          <TextId>{data.no}</TextId>
        </TextWrapper>
        <div className="card__wrapper">
          {mountainSystem ? <TextMountain>{mountainSystem}</TextMountain> : null}
          <TextMountain>
            <i>{prefectures}</i>
          </TextMountain>
        </div>
        <div className="card__wrapper">
          <TextName>
            {name}
            <span>{subName}</span>
          </TextName>
        </div>
        {showListLabel ? <ListLabel>{listLabels.join(' / ')}</ListLabel> : null}
        <div className="card__wrapper">
          <TextMountain>
            {t.DETAIL_ELEVATION}: {data.elevation}
            <span>m</span>
          </TextMountain>
        </div>
        <DetailLink href={detailHref} tabIndex={-1}>
          {t.DETAIL_LINK}
        </DetailLink>
        <a
          href={data.yamapUrl || `https://yamap.com/search/activities?keyword=${yamapKeyword}`}
          target="_blank"
          rel="noreferrer"
          className="link-yamap"
        >
          YAMAP
        </a>
        <a
          href={`https://www.instagram.com/explore/tags/${instagramTag}/`}
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
