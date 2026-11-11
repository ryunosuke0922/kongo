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
import { MainContent, Wrapper, WrapperContent } from '@/components/layouts/top/style'
import { motion } from 'framer-motion'
import { type ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocale, type SupportedLocale } from '@/i18n/index'
import { UI_COLORS } from '@/constants/ui'
import { BREAKPOINTS } from '@/constants/breakpoints'

const Top = styled.div`
  background: ${UI_COLORS.pageBackground};
  position: relative;
`

const WrapperMain = styled.div`
  background: ${UI_COLORS.surfacePrimary};
  border-top: 1px solid ${UI_COLORS.borderSubtle};
  border-bottom: 1px solid ${UI_COLORS.borderSubtle};
  backface-visibility: hidden;
`

type Props = {
  children: ReactNode
}

type DescriptionProps = {
  locale: SupportedLocale
  descriptions: string[]
}

const DescriptionText = ({ locale, descriptions }: DescriptionProps) => {
  const Description = locale === 'ja' ? VerticalDescription : HorizonDescription

  return (
    <Description>
      {descriptions.map((description, index) => (
        <span key={`${description}-${index}`}>
          {description}
          {locale === 'ja' || index === descriptions.length - 1 ? null : ' '}
        </span>
      ))}
    </Description>
  )
}

const LayoutTop = ({ children }: Props) => {
  const { t, locale } = useLocale()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const viewport = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`)
    const updateViewport = () => setIsMobile(viewport.matches)
    updateViewport()
    viewport.addEventListener('change', updateViewport)

    return () => viewport.removeEventListener('change', updateViewport)
  }, [])

  const pond = { src: '/images/mountain-pond.webp', alt: t.HERO_POND_ALT }
  const ridge = { src: '/images/ridge-panorama.webp', alt: t.HERO_RIDGE_ALT }
  const clouds = { src: '/images/hikers-above-clouds.webp', alt: t.HERO_CLOUDS_ALT }
  const stream = { src: '/images/misty-stream.webp', alt: t.HERO_STREAM_ALT }

  const backColumnImages = isMobile
    ? [pond, ridge]
    : [
        pond,
        {
          src: '/images/img02.webp',
          alt: 'Landscape of a famous Japanese mountain 02',
        },
        {
          src: '/images/img03.webp',
          alt: 'Landscape of a famous Japanese mountain 03',
        },
        {
          src: '/images/img04.webp',
          alt: 'Landscape of a famous Japanese mountain 04',
        },
        {
          src: '/images/img05.webp',
          alt: 'Landscape of a famous Japanese mountain 05',
        },
      ]

  const frontColumnImages = isMobile
    ? [clouds, stream]
    : [
        clouds,
        stream,
        {
          src: '/images/img08.webp',
          alt: 'Landscape of a famous Japanese mountain 08',
        },
        ridge,
        {
          src: '/images/img10.webp',
          alt: 'Landscape of a famous Japanese mountain 10',
        },
      ]

  const descriptions = [
    t.DESCRIPTION_1,
    t.DESCRIPTION_2,
    t.DESCRIPTION_3,
    t.DESCRIPTION_4,
    t.DESCRIPTION_5,
    t.DESCRIPTION_6,
  ]

  return (
    <Top>
      <Seo />
      <Header />
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
        }}
      >
        <main className="main container">
          <Wrapper>
            <div className="main__mv">
              <div className="main__head">
                {locale === 'ja' ? (
                  <div className="main__head-title is-jp">
                    <VerticalTitle>{t.TITLE}</VerticalTitle>
                  </div>
                ) : (
                  <div className="main__head-title is-en">
                    <HorizonTitle>{t.TITLE}</HorizonTitle>
                  </div>
                )}

                <div className="main__head-description">
                  <ParallaxItem factor={isMobile ? 0 : 0.1}>
                    <DescriptionText locale={locale} descriptions={descriptions} />
                  </ParallaxItem>
                </div>
              </div>

              <Slideshow
                key={isMobile ? 'mobile' : 'desktop'}
                backImages={backColumnImages}
                frontImages={frontColumnImages}
                isMobile={isMobile}
              />
            </div>
          </Wrapper>

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
