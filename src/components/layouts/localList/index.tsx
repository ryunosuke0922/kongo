import Seo from '@/components/molecules/seo'
import Footer from '@/components/features/footer/footer'
import Header from '@/components/features/header/header'
import { MainContent, Wrapper, WrapperContent } from '@/components/layouts/localList/style'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Local = styled.div`
  background: #fafafa;
  position: relative;
`
const LocalMain = styled.div`
  background: #f6f6f6;
  border-top: 1px solid rgba(50, 50, 50, 0.05);
  border-bottom: 1px solid rgba(50, 50, 50, 0.05);
  backface-visibility: hidden;
`

const LayoutLocalList = ({ children }: { children: ReactNode }) => {
  return (
    <Local className="noise">
      {/* TODO: SEO */}
      <Seo />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }} // TODO: ??
        transition={{
          duration: 0.5,
        }}
      >
        <main className="main container-local">
          <Wrapper>
            <LocalMain>
              <WrapperContent>
                <MainContent>{children}</MainContent>
                {/* <Sidebar></Sidebar> */}
              </WrapperContent>
            </LocalMain>
          </Wrapper>
        </main>
      </motion.div>

      <Footer />
    </Local>
  )
}

export default LayoutLocalList
