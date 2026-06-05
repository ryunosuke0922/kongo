import { MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { REGION_LINKS } from '@/constants/regionLinks'
import type { MountainListId } from '@/types/mountains'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'
import { getLocalizedListLabel } from '../../../i18n/mountains'
import { AsideContent, Heading3, Text } from './style'

type Props = {
  currentListId?: MountainListId
  variant?: 'regions' | 'lists'
}

const Sidebar = ({ currentListId = 'hyakumeizan', variant = 'regions' }: Props) => {
  const { t, locale } = useLocale()

  if (variant === 'lists') {
    return (
      <AsideContent>
        <nav aria-label={t.FOOTER_LIST_NAV_LABEL}>
          <Heading3>
            <Link href="/">{t.FOOTER_LIST_NAV_LABEL}</Link>
            <i></i>
          </Heading3>
          {MOUNTAIN_LISTS.map((list) => {
            const active = currentListId === list.id
            const href = list.id === 'hyakumeizan' ? '/' : list.path
            const label = getLocalizedListLabel(list, locale)

            return (
              <Text key={list.id} $active={active}>
                <Link href={href} aria-current={active ? 'page' : undefined}>
                  {active ? <strong>{label}</strong> : label}
                </Link>
                <i></i>
              </Text>
            )
          })}
        </nav>
      </AsideContent>
    )
  }

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
