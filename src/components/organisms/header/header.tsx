import { HeaderInner, HeaderWrapper } from '@/components/organisms/header/style'

const Header = (): JSX.Element => {
  return (
    <header>
      <HeaderWrapper>
        <HeaderInner>
          <img src="/images/logo_hyaku.svg"></img>
        </HeaderInner>
      </HeaderWrapper>
    </header>
  )
}

export default Header
