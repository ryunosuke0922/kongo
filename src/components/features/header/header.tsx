import { HeaderButton, HeaderInner, HeaderWrapper } from '@/components/features/header/style'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'

const Header = () => {
  const { t, locale } = useLocale()

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
            {locale === 'en' ? (
              <div>
                <button className="is-current">
                  <Link href="/en" locale="en" aria-label="Switch language to English">
                    en
                  </Link>
                </button>
                <button>
                  <Link href="/ja" locale="ja" aria-label="Switch language to Japanese">
                    jp
                  </Link>
                </button>
              </div>
            ) : (
              <div>
                <button>
                  <Link href="/en" locale="en" aria-label="Switch language to English">
                    en
                  </Link>
                </button>
                <button className="is-current">
                  <Link href="/ja" locale="ja" aria-label="Switch language to Japanese">
                    jp
                  </Link>
                </button>
              </div>
            )}
          </HeaderButton>
        </nav>
      </HeaderWrapper>
    </header>
  )
}

export default Header
