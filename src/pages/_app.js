import usePageTracking from '@/useTracking'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  usePageTracking()
  return <Component {...pageProps} />
}

export default MyApp
