import { ReactNode, useEffect, useRef, useState } from 'react'

type ParallaxProps = {
  children: ReactNode
  targetFactor?: number
}

const ParallaxItem = (props: ParallaxProps) => {
  const domRef = useRef<HTMLDivElement>(null)
  const targetFactor = props.targetFactor ? props.targetFactor : 0.15
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
      {props.children}
    </div>
  )
}

export default ParallaxItem
