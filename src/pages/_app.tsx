import usePageTracking from '@/hooks/useTracking'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import '@astryxdesign/core/astryx.css'
import '@astryxdesign/theme-neutral/theme.css'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  usePageTracking()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
