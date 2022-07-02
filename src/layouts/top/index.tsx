import { Heading3, VerticalDescription, VerticalTitle } from '@/components/atoms/text/style'
import ParallaxItem from '@/components/molecules/parallax'
import Seo from '@/components/molecules/seo'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const Top = styled.div`
  background: #fafafa;
  position: relative;
`

const WrapperMain = styled.div`
  background: #f6f6f6;
  border-top: 1px solid rgba(50, 50, 50, 0.05);
  border-bottom: 1px solid rgba(50, 50, 50, 0.05);
  backface-visibility: hidden;
`

const LayoutTop: FC = ({ children }) => {
  return (
    <Top className="noise">
      {/* TODO: SEO */}
      <Seo pageTitle={''} pageDescription={''} pagePath={''} />
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
          <>
            <Wrapper>
              <div className="main__mv">
                <div className="main__head">
                  <div className="main__head-title">
                    <VerticalTitle>日本の百名山</VerticalTitle>
                  </div>
                  <div className="main__head-description">
                    {isMobile ? (
                      <div>
                        <VerticalDescription>
                          <span>『日本の百名山』は、</span>
                          <span>深田久弥が執筆した</span>
                          <span>山岳随筆集です。</span>
                          <span>こちらの著書を参考に</span>
                          <span>日本の百名山を</span>
                          <span>一覧にまとめました。</span>
                        </VerticalDescription>
                      </div>
                    ) : (
                      <ParallaxItem factor={0.1}>
                        <VerticalDescription>
                          <span>『日本の百名山』は、</span>
                          <span>深田久弥が執筆した</span>
                          <span>山岳随筆集です。</span>
                          <span>こちらの著書を参考に</span>
                          <span>日本の百名山を</span>
                          <span>一覧にまとめました。</span>
                        </VerticalDescription>
                      </ParallaxItem>
                    )}
                  </div>
                </div>
                <div className="main__images">
                  {isMobile ? (
                    <>
                      <img src="images/img01.jpg" alt="" />
                      <img src="images/img02.jpg" alt="" />
                    </>
                  ) : (
                    <>
                      <ParallaxItem factor={0.2}>
                        <img src="images/img01.jpg" alt="" />
                      </ParallaxItem>
                      <ParallaxItem factor={0.1}>
                        <img src="images/img02.jpg" alt="" />
                      </ParallaxItem>
                    </>
                  )}
                </div>
              </div>
            </Wrapper>
          </>

          <WrapperMain>
            <WrapperContent>
              <MainContent>
                <div className="main__content-title">
                  <Heading3>
                    百名山 一覧<span>深田 久弥 選定100座</span>
                  </Heading3>
                </div>
                {children}
              </MainContent>
              <Sidebar></Sidebar>
            </WrapperContent>
          </WrapperMain>
        </main>
      </motion.div>
      <Footer />
    </Top>
  )
}

export default LayoutTop
