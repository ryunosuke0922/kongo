import Seo from '@/components/molecules/seo'
import Footer from '@/components/features/footer/footer'
import Header from '@/components/features/header/header'
import Sidebar from '@/components/features/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/components/layouts/local/style'
import { UI_COLORS } from '@/constants/ui'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Local = styled.div`
  background: ${UI_COLORS.pageBackground};
  position: relative;
`
const LocalMain = styled.div`
  background: ${UI_COLORS.surfacePrimary};
  border-top: 1px solid ${UI_COLORS.borderSubtle};
  border-bottom: 1px solid ${UI_COLORS.borderSubtle};
  backface-visibility: hidden;
`

const LayoutLocal = ({ children }: { children: ReactNode }) => {
  return (
    <Local className="noise">
      <Seo />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
        }}
      >
        <main className="main container-local">
          <Wrapper>
            <LocalMain>
              <WrapperContent>
                <MainContent>{children}</MainContent>
                <Sidebar></Sidebar>
              </WrapperContent>
            </LocalMain>
          </Wrapper>
        </main>
      </motion.div>

      <Footer />
    </Local>
  )
}

export default LayoutLocal
