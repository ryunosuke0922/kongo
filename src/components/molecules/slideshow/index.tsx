import ParallaxItem from '@/components/molecules/parallax'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type SlideshowImage = {
  src: string
  alt: string
}

type Props = {
  backImages: SlideshowImage[]
  frontImages: SlideshowImage[]
  isMobile: boolean
}

const MIN_CHANGE_DELAY_MS = 4000
const MAX_CHANGE_DELAY_MS = 6000
const FADE_SECONDS = 2.4

const SlideFrame = ({ image, first }: { image: SlideshowImage; first: boolean }) => {
  const reduceMotion = useReducedMotion()

  return (
    <div className="main__slide">
      <AnimatePresence initial={false}>
        <motion.div
          className="main__slide-layer"
          key={image.src}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : FADE_SECONDS, ease: [0.45, 0, 0.2, 1] }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1280}
            height={768}
            priority={first}
            sizes="(max-width: 768px) 63vw, (max-width: 1920px) 46vw, 880px"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const Slideshow = ({ backImages, frontImages, isMobile }: Props) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const delay = MIN_CHANGE_DELAY_MS + Math.random() * (MAX_CHANGE_DELAY_MS - MIN_CHANGE_DELAY_MS)
    const timer = window.setTimeout(() => setStep(step + 1), delay)

    return () => window.clearTimeout(timer)
  }, [step])

  const frontIndex = Math.ceil(step / 2) % frontImages.length
  const backIndex = Math.floor(step / 2) % backImages.length

  return (
    <div className="main__images">
      <ParallaxItem factor={isMobile ? 0 : 0.2}>
        <SlideFrame image={backImages[backIndex]} first={backIndex === 0} />
      </ParallaxItem>
      <ParallaxItem factor={isMobile ? 0 : 0.1}>
        <SlideFrame image={frontImages[frontIndex]} first={frontIndex === 0} />
      </ParallaxItem>
    </div>
  )
}

export default Slideshow
