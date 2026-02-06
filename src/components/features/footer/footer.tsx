import {
  HorizonTextNormalLink,
  VerticalTextBoldLink,
  VerticalTextNormalLink,
} from '@/components/atoms/text/style'
import {
  FooterContent,
  FooterContentEn,
  FooterInner,
  FooterWrapper,
} from '@/components/features/footer/style'
import { REGION_LINKS } from '@/constants/regionLinks'
import { faGithubSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'

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

const Footer = () => {
  const { t, locale } = useLocale()

  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <nav aria-label="Footer mountain navigation">
            {locale === 'en' ? (
              <FooterContentEn>
                <HorizonTextNormalLink>
                  <Link href={'/'}>{t.TITLE}</Link>
                  <i></i>
                </HorizonTextNormalLink>
                {REGION_LINKS.map((link) => (
                  <HorizonTextNormalLink key={link.path}>
                    <Link href={link.path}>{t[link.labelKey]}</Link>
                    <i></i>
                  </HorizonTextNormalLink>
                ))}
              </FooterContentEn>
            ) : (
              <FooterContent>
                <VerticalTextBoldLink>
                  <Link href={'/'}>{t.TITLE}</Link>
                  <i></i>
                </VerticalTextBoldLink>
                {REGION_LINKS.map((link) => (
                  <VerticalTextNormalLink key={link.path}>
                    <Link href={link.path}>{t[link.labelKey]}</Link>
                    <i></i>
                  </VerticalTextNormalLink>
                ))}
              </FooterContent>
            )}
          </nav>
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
