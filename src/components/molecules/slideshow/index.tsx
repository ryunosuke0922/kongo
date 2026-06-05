import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

type SlideshowImage = {
  webp: string
  jpg: string
  alt?: string
  width?: number
  height?: number
}

type Props = {
  images: SlideshowImage[]
  intervalMs?: number
  duration?: number
}

const SlideFrame = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 1280 / 768;

  .main__images > div:first-child & {
    width: 88rem;
    max-height: 54rem;
    position: absolute;
    top: 35rem;
    left: 10rem;
    z-index: 1;
  }

  .main__images > div:last-child & {
    width: 80rem;
    max-height: 49rem;
    position: absolute;
    top: -3rem;
    left: 43.2rem;
    z-index: 2;
  }

  @media screen and (min-width: 1920px) {
    .main__images > div:first-child & {
      width: 880px;
      max-height: 490px;
      top: 350px;
      left: 100px;
    }

    .main__images > div:last-child & {
      width: 800px;
      max-height: 430px;
      top: -30px;
      left: 432px;
    }
  }

  &&& img {
    width: 100%;
    height: 100%;
    max-height: none;
    position: absolute;
    inset: 0;
    z-index: auto;
    object-fit: cover;
  }
`

const SlideLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
`

const Slideshow = ({ images, intervalMs = 8000, duration = 2.4 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [images.length, intervalMs])

  if (images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]
  const imageWidth = currentImage.width ?? 1280
  const imageHeight = currentImage.height ?? 768

  const imageSrc = currentImage.webp || currentImage.jpg

  return (
    <SlideFrame>
      <AnimatePresence initial={false}>
        <SlideLayer
          key={`${currentImage.jpg}-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration, ease: [0.45, 0, 0.2, 1] }}
        >
          <Image
            src={imageSrc}
            alt={currentImage.alt ?? 'Famous mountain landscape'}
            width={imageWidth}
            height={imageHeight}
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 480px, (max-width: 1920px) 880px, 880px"
          />
        </SlideLayer>
      </AnimatePresence>
    </SlideFrame>
  )
}

export default Slideshow
