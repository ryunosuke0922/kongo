import { HeaderInner, HeaderWrapper } from '@/components/organisms/header/style'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'

const Header = (): JSX.Element => {
  const { t } = useLocale()

  return (
    <header>
      <HeaderWrapper>
        <button>
          <Link href="/en" locale="en" passHref>
            en
          </Link>
        </button>
        <button>
          <Link href="/ja" locale="ja" passHref>
            jp
          </Link>
        </button>
        <HeaderInner>
          <img src="/images/logo_hyaku.svg" alt={t.TITLE} width={80} height={56}></img>
        </HeaderInner>
      </HeaderWrapper>
    </header>
  )
}

export default Header
