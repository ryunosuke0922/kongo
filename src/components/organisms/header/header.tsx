import { HeaderInner, HeaderWrapper } from '@/components/organisms/header/style'
import Link from 'next/link'

const Header = (): JSX.Element => {
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
          <img src="/images/logo_hyaku.svg" alt="日本百名山" width={80} height={56}></img>
        </HeaderInner>
      </HeaderWrapper>
    </header>
  )
}

export default Header
