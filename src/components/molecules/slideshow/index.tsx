import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

const Slideshow = ({ images, intervalMs = 5000, duration = 1.4 }: Props) => {
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
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${currentImage.jpg}-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        <Image
          src={imageSrc}
          alt={currentImage.alt ?? 'Famous mountain landscape'}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 768px) 48rem, (max-width: 1920px) 88rem, 880px"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Slideshow
