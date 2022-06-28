import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

const Local = styled.div`
  background: #fafafa;
`

const LayoutLocal: FC = ({ children }) => {
  return (
    <Local>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.5,
        }}
      >
        <main className="main container">
          <Wrapper>
            <WrapperContent>
              <MainContent>{children}</MainContent>
              <Sidebar></Sidebar>
            </WrapperContent>
          </Wrapper>
        </main>
      </motion.div>

      <Footer />
    </Local>
  )
}

export default LayoutLocal
