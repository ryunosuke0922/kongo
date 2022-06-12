import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import { FC } from 'react'
import styled from 'styled-components'

const LayoutFull: FC = ({ children }) => {
  const Wrapper = styled.div`
    background: #fafafa;
  `

  return (
    <Wrapper>
      <Header />
      <main className="main container">{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default LayoutFull
