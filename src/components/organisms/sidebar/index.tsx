import Link from 'next/link'
import { useLocale } from '../../../i18n/index'
import { AsideContent, Heading3, Text } from './style'

const Sidebar = (): JSX.Element => {
  const { t } = useLocale()

  return (
    <AsideContent>
      <Heading3>
        <Link href={'/'} passHref>
          <a>{t.TITLE}</a>
        </Link>
        <i></i>
      </Heading3>
      <Text>
        <Link href={'/local/hokkaido'} passHref>
          <a>{t.HOKKAIDO_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/tohoku'} passHref>
          <a>{t.TOHOKU_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kanto'} passHref>
          <a>{t.KANTO_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chubu'} passHref>
          <a>{t.TOHOKU_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kansai'} passHref>
          <a>{t.KANSAI_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chugoku'} passHref>
          <a>{t.CHUGOKU_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/shikoku'} passHref>
          <a>{t.SHIKOKU_REGION}</a>
        </Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kyushu-okinawa'} passHref>
          <a>{t.KYUSHU_OKINAWA_REGION}</a>
        </Link>
        <i></i>
      </Text>
    </AsideContent>
  )
}

export default Sidebar
