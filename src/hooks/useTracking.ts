import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const GA_MEASUREMENT_ID = 'G-8ZN9DS7WVY'

const usePageTracking = () => {
  const router = useRouter()

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.send({
        hitType: 'pageview',
        page: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: router.asPath,
    })
  }, [router.asPath])
}

export default usePageTracking
