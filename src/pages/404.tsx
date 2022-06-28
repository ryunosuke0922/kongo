import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import type { NextPage } from 'next'
import styled from 'styled-components'

const Err = styled.div`
  background: #fafafa;
`
const Err404: NextPage = () => {
  return (
    <Err>
      <Header />
      <main className="main container">
        <Wrapper>
          <WrapperContent>
            <MainContent>
              <h1>404</h1>
            </MainContent>
          </WrapperContent>
        </Wrapper>
      </main>
      <Footer />
    </Err>
  )
}

export default Err404
