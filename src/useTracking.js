import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const usePageTracking = () => {
  useEffect(() => {
    ReactGA.initialize('G-8ZN9DS7WVY')
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [])
}

export default usePageTracking
