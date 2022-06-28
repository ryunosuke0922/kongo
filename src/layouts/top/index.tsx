import { Heading3, VerticalDescription, VerticalTitle } from '@/components/atoms/text/style'
import ParallaxItem from '@/components/molecules/parallax'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { FC } from 'react'
import styled from 'styled-components'

const Top = styled.div`
  background: #fafafa;
`
const WrapperMain = styled.div`
  background: #f6f6f6;
  border-top: 1px solid rgba(50, 50, 50, 0.05);
  backface-visibility: hidden;
`
const LayoutTop: FC = ({ children }) => {
  return (
    <Top>
      <Header />
      <main className="main container">
        <>
          <Wrapper>
            <div className="main__mv">
              <div className="main__head">
                <div className="main__head-title">
                  <VerticalTitle>日本の百名山</VerticalTitle>
                </div>
                <div className="main__head-description">
                  <ParallaxItem targetFactor={0.05}>
                    <VerticalDescription>
                      <span>『日本の百名山』は、</span>
                      <span>深田久弥が執筆した</span>
                      <span>山岳随筆集です。</span>
                      <span>こちらの著書を参考に</span>
                      <span>日本の百名山を</span>
                      <span>一覧にまとめました。</span>
                    </VerticalDescription>
                  </ParallaxItem>
                </div>
              </div>
              <div className="main__images">
                <ParallaxItem targetFactor={0.2}>
                  <img src="images/img01.jpg" alt="" />
                </ParallaxItem>
                <ParallaxItem targetFactor={0.1}>
                  <img src="images/img02.jpg" alt="" />
                </ParallaxItem>
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
      <Footer />
    </Top>
  )
}

export default LayoutTop
