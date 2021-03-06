import usePageTracking from '@/useTracking'
import { AnimatePresence } from 'framer-motion'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  usePageTracking()

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
