import Link from 'next/link'
import { useLocale } from '../../../i18n/index'
import { AsideContent, Heading3, Text } from './style'

const Sidebar = () => {
  const { t } = useLocale()

  return (
    <AsideContent>
      <Heading3>
        <Link href={'/'}>{t.TITLE}</Link>
        <i></i>
      </Heading3>
      <Text>
        <Link href={'/local/hokkaido'}>{t.HOKKAIDO_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/tohoku'}>{t.TOHOKU_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kanto'}>{t.KANTO_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chubu'}>{t.TOHOKU_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kansai'}>{t.KANSAI_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/chugoku'}>{t.CHUGOKU_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/shikoku'}>{t.SHIKOKU_REGION}</Link>
        <i></i>
      </Text>
      <Text>
        <Link href={'/local/kyushu-okinawa'}>{t.KYUSHU_OKINAWA_REGION}</Link>
        <i></i>
      </Text>
    </AsideContent>
  )
}

export default Sidebar
