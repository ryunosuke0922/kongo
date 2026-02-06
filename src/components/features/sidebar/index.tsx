import { REGION_LINKS } from '@/constants/regionLinks'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'
import { AsideContent, Heading3, Text } from './style'

const Sidebar = () => {
  const { t } = useLocale()

  return (
    <AsideContent>
      <nav aria-label="Sidebar mountain navigation">
        <Heading3>
          <Link href={'/'}>{t.TITLE}</Link>
          <i></i>
        </Heading3>
        {REGION_LINKS.map((link) => (
          <Text key={link.path}>
            <Link href={link.path}>{t[link.labelKey]}</Link>
            <i></i>
          </Text>
        ))}
      </nav>
    </AsideContent>
  )
}

export default Sidebar
