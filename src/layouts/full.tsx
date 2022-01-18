import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import React, { FC } from 'react'
import styled from 'styled-components'

const LayoutFull: FC = ({ children }) => {
  const Wrapper = styled.section`
    padding: 1.6rem;
    background: #e5e5e5;
  `

  return(
    <Wrapper>
      <Header />
      <main className="main container">{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default LayoutFull
