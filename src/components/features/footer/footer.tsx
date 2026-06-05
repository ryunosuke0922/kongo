import { HorizonTextNormalLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import {
  FooterContent,
  FooterContentEn,
  FooterInner,
  FooterListLink,
  FooterListNav,
  FooterWrapper,
} from '@/components/features/footer/style'
import { MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { REGION_LINKS } from '@/constants/regionLinks'
import type { MountainListId } from '@/types/mountains'
import { faGithubSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'
import { getLocalizedListLabel } from '../../../i18n/mountains'

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/ryunosuke0922/kongo',
    ariaLabel: 'GitHub repository (opens in a new tab)',
    icon: faGithubSquare,
  },
  {
    href: 'https://x.com/yutomaeda3',
    ariaLabel: 'X @yutomaeda3 (opens in a new tab)',
    icon: faXTwitter,
  },
  {
    href: 'https://x.com/ryuuuu092',
    ariaLabel: 'X @ryuuuu092 (opens in a new tab)',
    icon: faXTwitter,
  },
] as const

type Props = {
  currentListId?: MountainListId
}

const Footer = ({ currentListId = 'hyakumeizan' }: Props) => {
  const { t, locale } = useLocale()
  const showRegionNavigation = currentListId === 'hyakumeizan'

  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterListNav aria-label={t.FOOTER_LIST_NAV_LABEL}>
            {MOUNTAIN_LISTS.map((list) => {
              const href = list.id === 'hyakumeizan' ? '/' : list.path
              const label = getLocalizedListLabel(list, locale)
              const active = currentListId === list.id

              return (
                <FooterListLink
                  key={list.id}
                  href={href}
                  $active={active}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </FooterListLink>
              )
            })}
          </FooterListNav>
          {showRegionNavigation ? (
            <nav aria-label="Footer mountain navigation">
              {locale === 'en' ? (
                <FooterContentEn>
                  {REGION_LINKS.map((link) => (
                    <HorizonTextNormalLink key={link.path}>
                      <Link href={link.path}>{t[link.labelKey]}</Link>
                      <i></i>
                    </HorizonTextNormalLink>
                  ))}
                </FooterContentEn>
              ) : (
                <FooterContent>
                  {REGION_LINKS.map((link) => (
                    <VerticalTextNormalLink key={link.path}>
                      <Link href={link.path}>{t[link.labelKey]}</Link>
                      <i></i>
                    </VerticalTextNormalLink>
                  ))}
                </FooterContent>
              )}
            </nav>
          ) : null}
          <div className="footer__sns">
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
                key={link.href}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <div className="footer__copyright">
            <p>© 2022</p>
          </div>
        </FooterInner>
      </FooterWrapper>
    </footer>
  )
}

export default Footer
