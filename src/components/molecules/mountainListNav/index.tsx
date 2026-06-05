import { MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { activePillControl, pillHoverMotion } from '@/components/molecules/sharedSurfaces/style'
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
  font-size: 1.6rem;
  line-height: 1.5;
`

const ListNavItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${UI_SPACE.sm};
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListNavItem = styled.li`
  margin: 0;
`

const ListNavLink = styled(Link)<{ $active: boolean }>`
  ${activePillControl}
  ${pillHoverMotion}
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
              <ListNavLink href={href} $active={active} aria-current={active ? 'page' : undefined}>
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
