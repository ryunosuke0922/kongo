import { ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  factor?: number
}

const ParallaxItem = ({ children, factor }: Props) => {
  const domRef = useRef<HTMLDivElement>(null)
  const targetFactor = factor ? factor : 0.15
  const [offsetY, setOffsetY] = useState(0)

  const onScroll = () => {
    if (domRef.current !== null) {
      const scrollY = window.pageYOffset
      setOffsetY(scrollY * targetFactor * -1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
  })

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
