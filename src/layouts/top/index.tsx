import {
  Heading3,
  HorizonTitle,
  VerticalDescription,
  VerticalTitle,
} from '@/components/atoms/text/style'
import ParallaxItem from '@/components/molecules/parallax'
import Seo from '@/components/molecules/seo'
import Slideshow from '@/components/molecules/slideshow'
import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import Sidebar from '@/components/organisms/sidebar'
import { MainContent, Wrapper, WrapperContent } from '@/layouts/top/style'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
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

const backColumnImages = [
  { webp: '/images/img01.webp', jpg: '/images/img01.jpg' },
  { webp: '/images/img02.webp', jpg: '/images/img02.jpg' },
  { webp: '/images/img03.webp', jpg: '/images/img03.jpg' },
  { webp: '/images/img04.webp', jpg: '/images/img04.jpg' },
  { webp: '/images/img05.webp', jpg: '/images/img05.jpg' },
]

const frontColumnImages = [
  { webp: '/images/img06.webp', jpg: '/images/img06.jpg' },
  { webp: '/images/img07.webp', jpg: '/images/img07.jpg' },
  { webp: '/images/img08.webp', jpg: '/images/img08.jpg' },
  { webp: '/images/img09.webp', jpg: '/images/img09.jpg' },
  { webp: '/images/img10.webp', jpg: '/images/img10.jpg' },
]

const LayoutTop = ({ children }: { children: ReactNode }) => {
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
                    <Slideshow images={backColumnImages} />
                  </ParallaxItem>
                  <ParallaxItem factor={0.1}>
                    <Slideshow images={frontColumnImages} />
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
                  <img src="/images/img06.jpg" alt="" />
                  <img src="/images/img01.jpg" alt="" />
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
