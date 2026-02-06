import {
  Heading3,
  HorizonDescription,
  HorizonTitle,
  VerticalDescription,
  VerticalTitle,
} from '@/components/atoms/text/style'
import ParallaxItem from '@/components/molecules/parallax'
import Seo from '@/components/molecules/seo'
import Slideshow from '@/components/molecules/slideshow'
import Footer from '@/components/features/footer/footer'
import Header from '@/components/features/header/header'
import Sidebar from '@/components/features/sidebar'
import {
  FilterArea,
  FilterResult,
  MainContent,
  Wrapper,
  WrapperContent,
} from '@/components/layouts/top/style'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { useLocale } from '@/i18n/index'

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
  {
    webp: '/images/img01.webp',
    jpg: '/images/img01.jpg',
    alt: 'Landscape of a famous Japanese mountain 01',
  },
  {
    webp: '/images/img02.webp',
    jpg: '/images/img02.jpg',
    alt: 'Landscape of a famous Japanese mountain 02',
  },
  {
    webp: '/images/img03.webp',
    jpg: '/images/img03.jpg',
    alt: 'Landscape of a famous Japanese mountain 03',
  },
  {
    webp: '/images/img04.webp',
    jpg: '/images/img04.jpg',
    alt: 'Landscape of a famous Japanese mountain 04',
  },
  {
    webp: '/images/img05.webp',
    jpg: '/images/img05.jpg',
    alt: 'Landscape of a famous Japanese mountain 05',
  },
]

const frontColumnImages = [
  {
    webp: '/images/img06.webp',
    jpg: '/images/img06.jpg',
    alt: 'Landscape of a famous Japanese mountain 06',
  },
  {
    webp: '/images/img07.webp',
    jpg: '/images/img07.jpg',
    alt: 'Landscape of a famous Japanese mountain 07',
  },
  {
    webp: '/images/img08.webp',
    jpg: '/images/img08.jpg',
    alt: 'Landscape of a famous Japanese mountain 08',
  },
  {
    webp: '/images/img09.webp',
    jpg: '/images/img09.jpg',
    alt: 'Landscape of a famous Japanese mountain 09',
  },
  {
    webp: '/images/img10.webp',
    jpg: '/images/img10.jpg',
    alt: 'Landscape of a famous Japanese mountain 10',
  },
]

type Props = {
  children: ReactNode
  controls?: ReactNode
  resultSummary?: ReactNode
}

type DescriptionProps = {
  locale: 'en' | 'ja'
  descriptions: string[]
}

const DescriptionText = ({ locale, descriptions }: DescriptionProps) => {
  if (locale === 'en') {
    return (
      <HorizonDescription>
        {descriptions.map((description, index) => (
          <span key={`${description}-${index}`}>{description}</span>
        ))}
      </HorizonDescription>
    )
  }

  return (
    <VerticalDescription>
      {descriptions.map((description, index) => (
        <span key={`${description}-${index}`}>{description}</span>
      ))}
    </VerticalDescription>
  )
}

const LayoutTop = ({ children, controls, resultSummary }: Props) => {
  const { t, locale } = useLocale()
  const descriptions = [
    t.DESCRIPTION_1,
    t.DESCRIPTION_2,
    t.DESCRIPTION_3,
    t.DESCRIPTION_4,
    t.DESCRIPTION_5,
    t.DESCRIPTION_6,
  ]

  return (
    <Top className="noise">
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
                      <DescriptionText locale={locale} descriptions={descriptions} />
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
                      <DescriptionText locale={locale} descriptions={descriptions} />
                    </div>
                  </div>
                </div>

                <div className="main__images">
                  <Image
                    src="/images/img06.jpg"
                    alt="Landscape of a famous Japanese mountain 06"
                    width={1280}
                    height={768}
                    className="main__image-sp-back"
                    priority
                  />
                  <Image
                    src="/images/img01.jpg"
                    alt="Landscape of a famous Japanese mountain 01"
                    width={1280}
                    height={768}
                    className="main__image-sp-front"
                    priority
                  />
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
                {controls ? <FilterArea>{controls}</FilterArea> : null}
                {resultSummary ? <FilterResult>{resultSummary}</FilterResult> : null}
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
