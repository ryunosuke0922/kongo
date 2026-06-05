import { HeaderButton, HeaderInner, HeaderWrapper } from '@/components/features/header/style'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useLocale } from '../../../i18n/index'

const Header = () => {
  const { t, locale } = useLocale()
  const router = useRouter()
  const [localeHref, setLocaleHref] = useState('/')

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    setLocaleHref(router.asPath || '/')
  }, [router.asPath, router.isReady])

  return (
    <header>
      <HeaderWrapper>
        <HeaderInner>
          <Link href="/" locale={locale} aria-label={`${t.TITLE} top`}>
            <Image
              src="/images/logo_hyaku.svg"
              alt={t.TITLE}
              width={80}
              height={56}
              className="header__logo"
              priority
            />
          </Link>
        </HeaderInner>
        <nav aria-label={t.LANGUAGE_SWITCHER_ARIA}>
          <HeaderButton>
            <div>
              <Link
                href={localeHref}
                locale="en"
                aria-label={t.LANGUAGE_SWITCH_TO_EN}
                aria-current={locale === 'en' ? 'page' : undefined}
                className={locale === 'en' ? 'is-current' : ''}
              >
                en
              </Link>
              <Link
                href={localeHref}
                locale="ja"
                aria-label={t.LANGUAGE_SWITCH_TO_JA}
                aria-current={locale === 'ja' ? 'page' : undefined}
                className={locale === 'ja' ? 'is-current' : ''}
              >
                jp
              </Link>
              <Link
                href={localeHref}
                locale="zh-TW"
                aria-label={t.LANGUAGE_SWITCH_TO_ZH_TW}
                aria-current={locale === 'zh-TW' ? 'page' : undefined}
                className={locale === 'zh-TW' ? 'is-current' : ''}
              >
                繁
              </Link>
              <Link
                href={localeHref}
                locale="zh-CN"
                aria-label={t.LANGUAGE_SWITCH_TO_ZH_CN}
                aria-current={locale === 'zh-CN' ? 'page' : undefined}
                className={locale === 'zh-CN' ? 'is-current' : ''}
              >
                简
              </Link>
            </div>
          </HeaderButton>
        </nav>
      </HeaderWrapper>
    </header>
  )
}

export default Header
