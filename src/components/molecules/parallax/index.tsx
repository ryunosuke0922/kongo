import { ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  factor?: number
}

const ParallaxItem = ({ children, factor }: Props) => {
  const domRef = useRef<HTMLDivElement>(null)
  const targetFactor = factor ?? 0.15
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (domRef.current !== null) {
        const scrollY = window.pageYOffset
        setOffsetY(scrollY * targetFactor * -1)
      }
    }

    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [targetFactor])

  return (
    <div
      ref={domRef}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  )
}
export default ParallaxItem
