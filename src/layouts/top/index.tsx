import {
  Heading3,
  HorizonTitle,
  VerticalDescription,
  VerticalTitle,
} from '@/components/atoms/text/style'
import ParallaxItem from '@/components/molecules/parallax'
import Seo from '@/components/molecules/seo'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'
import { useLocale } from '../../i18n/index'

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
  const { t, locale } = useLocale()

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
              <div className="main__mv-pc">
                <div className="main__head">
                  {locale === 'en' ? (
                    <div className="main__head-title is-en">
                      <HorizonTitle>{t.TITLE}</HorizonTitle>
                    </div>
                  ) : (
                    <div className="main__head-title is-jp">
                      <VerticalTitle>{t.TITLE}</VerticalTitle>
                    </div>
                  )}

                  <div className="main__head-description">
                    <ParallaxItem factor={0.1}>
                      <VerticalDescription>
                        <span>{t.DESCRIPTION_1}</span>
                        <span>{t.DESCRIPTION_2}</span>
                        <span>{t.DESCRIPTION_3}</span>
                        <span>{t.DESCRIPTION_4}</span>
                        <span>{t.DESCRIPTION_5}</span>
                        <span>{t.DESCRIPTION_6}</span>
                      </VerticalDescription>
                    </ParallaxItem>
                  </div>
                </div>

                <div className="main__images">
                  <ParallaxItem factor={0.2}>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img04.webp"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img04.jpg"
                      />
                      <img
                        src="https://www.famous-mountains-in-japan.com/images/img04.jpg"
                        alt=""
                      />
                    </picture>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img05.webp"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img05.jpg"
                      />
                      <img
                        src="https://www.famous-mountains-in-japan.com/images/img05.jpg"
                        alt=""
                      />
                    </picture>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img06.webp"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="https://www.famous-mountains-in-japan.com/images/img06.jpg"
                      />
                      <img
                        src="https://www.famous-mountains-in-japan.com/images/img06.jpg"
                        alt=""
                      />
                    </picture>
                    {/* <img src="https://www.famous-mountains-in-japan.com/images/img04.jpg" alt="" />
                    <img src="https://www.famous-mountains-in-japan.com/images/img05.jpg" alt="" />
                    <img src="https://www.famous-mountains-in-japan.com/images/img06.jpg" alt="" /> */}
                  </ParallaxItem>
                  <ParallaxItem factor={0.1}>
                    <img src="https://www.famous-mountains-in-japan.com/images/img01.jpg" alt="" />
                    <img src="https://www.famous-mountains-in-japan.com/images/img02.jpg" alt="" />
                    <img src="https://www.famous-mountains-in-japan.com/images/img03.jpg" alt="" />
                  </ParallaxItem>
                </div>
              </div>

              <div className="main__mv-sp">
                <div className="main__head">
                  {locale === 'en' ? (
                    <div className="main__head-title is-en">
                      <HorizonTitle>{t.TITLE}</HorizonTitle>
                    </div>
                  ) : (
                    <div className="main__head-title is-jp">
                      <VerticalTitle>{t.TITLE}</VerticalTitle>
                    </div>
                  )}

                  <div className="main__head-description">
                    <div>
                      <VerticalDescription>
                        <span>{t.DESCRIPTION_1}</span>
                        <span>{t.DESCRIPTION_2}</span>
                        <span>{t.DESCRIPTION_3}</span>
                        <span>{t.DESCRIPTION_4}</span>
                        <span>{t.DESCRIPTION_5}</span>
                        <span>{t.DESCRIPTION_6}</span>
                      </VerticalDescription>
                    </div>
                  </div>
                </div>

                <div className="main__images">
                  <img src="https://www.famous-mountains-in-japan.com/images/img06.jpg" alt="" />
                  <img src="https://www.famous-mountains-in-japan.com/images/img01.jpg" alt="" />
                </div>
              </div>
            </Wrapper>
          </>

          <WrapperMain>
            <WrapperContent>
              <MainContent>
                <div className="main__content-title">
                  <Heading3>
                    {t.INFO}
                    <span>{t.INFO_NAME}</span>
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
