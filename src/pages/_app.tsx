import usePageTracking from '@/hooks/useTracking'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  usePageTracking()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
