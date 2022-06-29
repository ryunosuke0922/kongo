import Seo from '@/components/molecules/seo'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

const Local = styled.div`
  background: #fafafa;
  position: relative;
`

const LayoutLocal: FC = ({ children }) => {
  return (
    <Local className="noise">
      {/* TODO: SEO */}
      <Seo pageTitle={'地方別'} pageDescription={''} pagePath={''} />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }} // TODO: ??
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
