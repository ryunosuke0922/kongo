import { HeaderInner, HeaderWrapper } from '@/components/organisms/header/style'

const Header = (): JSX.Element => {
  return (
    <header>
      <HeaderWrapper>
        <HeaderInner>
          <img src="/images/logo_hyaku.svg" alt="日本の百名山"></img>
        </HeaderInner>
      </HeaderWrapper>
    </header>
  )
}

export default Header
