import { Heading3, VerticalDescription, VerticalTitle } from '@/components/atoms/text/style'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { FC } from 'react'
import styled from 'styled-components'

const LayoutTop: FC = ({ children }) => {
  const Top = styled.div`
    background: #fafafa;
  `
  const WrapperMain = styled.div`
    background: #f6f6f6;
    border-top: rgba(0, 0, 0, 0.6);
  `

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
                  <VerticalDescription>
                    『日本の百名山』<br></br>
                    (初刊一九六四年七月 新潮社)は、<br></br>
                    深田久弥が執筆した<br></br>
                    山岳随筆集です。<br></br>
                    こちらの著書を参考に<br></br>
                    日本の百名山を<br></br>
                    一覧にまとめました。
                  </VerticalDescription>
                </div>
              </div>
              <div className="main__images">
                <img src="images/img02.jpg" alt="" />
                <img src="images/img01.jpg" alt="" />
              </div>
            </div>
          </Wrapper>
        </>

        <WrapperMain>
          <WrapperContent>
            <MainContent>
              <div className="main__content-title">
                <Heading3>百名山 一覧（深田 久弥 選定100座）</Heading3>
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
