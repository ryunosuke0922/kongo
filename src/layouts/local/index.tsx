import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { FC } from 'react'
import styled from 'styled-components'

const LayoutLocal: FC = ({ children }) => {
  const Local = styled.div`
    background: #f6f6f6;
  `

  return (
    <Local>
      <Header />
      <main className="main container">
        <Wrapper>
          <WrapperContent>
            <MainContent>{children}</MainContent>
            <Sidebar></Sidebar>
          </WrapperContent>
        </Wrapper>
      </main>
      <Footer />
    </Local>
  )
}

export default LayoutLocal
