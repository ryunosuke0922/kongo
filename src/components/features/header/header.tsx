import { HeaderButton, HeaderInner, HeaderWrapper } from '@/components/features/header/style'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLocale } from '../../../i18n/index'

const Header = () => {
  const { t, locale } = useLocale()
  const router = useRouter()

  const localeHref = {
    pathname: router.pathname,
    query: router.query,
  }

  return (
    <header>
      <HeaderWrapper>
        <HeaderInner>
          <Image
            src="/images/logo_hyaku.svg"
            alt={t.TITLE}
            width={80}
            height={56}
            className="header__logo"
            priority
          />
        </HeaderInner>
        <nav aria-label="Language switcher">
          <HeaderButton>
            <div>
              <Link
                href={localeHref}
                locale="en"
                aria-label="Switch language to English"
                aria-current={locale === 'en' ? 'page' : undefined}
                className={locale === 'en' ? 'is-current' : ''}
              >
                en
              </Link>
              <Link
                href={localeHref}
                locale="ja"
                aria-label="Switch language to Japanese"
                aria-current={locale === 'ja' ? 'page' : undefined}
                className={locale === 'ja' ? 'is-current' : ''}
              >
                jp
              </Link>
            </div>
          </HeaderButton>
        </nav>
      </HeaderWrapper>
    </header>
  )
}

export default Header
