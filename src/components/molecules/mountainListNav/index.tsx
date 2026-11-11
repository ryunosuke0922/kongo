import { MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { useLocale } from '@/i18n/index'
import { getLocalizedListLabel } from '@/i18n/mountains'
import type { MountainListId } from '@/types/mountains'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  currentListId?: MountainListId
}

const ListNav = styled.nav`
  width: 100%;
  margin: 0 0 ${UI_SPACE.xl};
`

const ListNavLabel = styled.p`
  margin: 0 0 ${UI_SPACE.sm};
  color: ${UI_COLORS.textSecondary};
  font-size: small;
  line-height: 1.5;
`

const ListNavItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 1em;
  font-size: medium;
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListNavItem = styled.li`
  margin: 0;
`

const ListNavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding-block: 0.5em;
  color: ${UI_COLORS.textSecondary};
  text-decoration: underline;
  text-underline-offset: 0.3em;
  overflow-wrap: anywhere;

  &:hover,
  &[aria-current='page'] {
    color: ${UI_COLORS.textPrimary};
    text-decoration-thickness: 2px;
  }

  &[aria-current='page'] {
    font-weight: 600;
  }
`

const MountainListNav = ({ currentListId = 'hyakumeizan' }: Props) => {
  const { t, locale } = useLocale()
  const label = t.LIST_NAV_LABEL

  return (
    <ListNav aria-label={label}>
      <ListNavLabel>{label}</ListNavLabel>
      <ListNavItems>
        {MOUNTAIN_LISTS.map((list) => {
          const active = list.id === currentListId
          const href = list.id === 'hyakumeizan' ? '/' : list.path
          const text = getLocalizedListLabel(list, locale)

          return (
            <ListNavItem key={list.id}>
              <ListNavLink href={href} aria-current={active ? 'page' : undefined}>
                {text}
              </ListNavLink>
            </ListNavItem>
          )
        })}
      </ListNavItems>
    </ListNav>
  )
}

export default MountainListNav
