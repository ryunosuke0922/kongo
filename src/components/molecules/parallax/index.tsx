import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
  factor?: number
}

const ParallaxItem = ({ children, factor }: Props) => {
  const domRef = useRef<HTMLDivElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const targetFactor = factor ?? 0.15

  useEffect(() => {
    const applyTransform = () => {
      rafIdRef.current = null

      if (domRef.current !== null) {
        const scrollY = window.pageYOffset
        const offsetY = scrollY * targetFactor * -1
        domRef.current.style.transform = `translate3d(0, ${offsetY}px, 0)`
      }
    }

    const onScroll = () => {
      if (rafIdRef.current !== null) {
        return
      }

      rafIdRef.current = window.requestAnimationFrame(applyTransform)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [targetFactor])

  return <div ref={domRef}>{children}</div>
}
export default ParallaxItem
