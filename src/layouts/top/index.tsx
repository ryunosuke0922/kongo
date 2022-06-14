import { VerticalDescription, VerticalTitle } from '@/components/atoms/text/style'
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

  return (
    <Top>
      <Header />
      <main className="main container">
        <Wrapper>
          <>
            <div className="main__mv">
              <div className="main__head">
                <div className="main__head-title">
                  <VerticalTitle>日本の百名山</VerticalTitle>
                </div>
                <div className="main__head-description">
                  <VerticalDescription>
                    『日本の百名山』<br></br>
                    (初刊一九六四年七月 新潮社)は、<br></br>
                    深田久弥が執筆した山岳随筆集です。<br></br>
                    こちらの著書を参考に日本の百名山を<br></br>
                    一覧にまとめました。
                  </VerticalDescription>
                </div>
              </div>
              <div className="main__images">
                <img src="images/img01.jpg" alt="" />
                <img src="images/img02.jpg" alt="" />
              </div>
            </div>
          </>
          <WrapperContent>
            <MainContent>{children}</MainContent>
            <Sidebar></Sidebar>
          </WrapperContent>
        </Wrapper>
      </main>
      <Footer />
    </Top>
  )
}

export default LayoutTop
