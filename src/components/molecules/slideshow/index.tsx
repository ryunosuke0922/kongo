import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type SlideshowImage = {
  webp: string
  jpg: string
  alt?: string
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

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={`${currentImage.jpg}-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        <picture>
          <source type="image/webp" srcSet={currentImage.webp} />
          <source type="image/jpeg" srcSet={currentImage.jpg} />
          <img src={currentImage.jpg} alt={currentImage.alt ?? ''} />
        </picture>
      </motion.div>
    </AnimatePresence>
  )
}

export default Slideshow
