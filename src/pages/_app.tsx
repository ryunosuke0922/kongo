import 'modern-css-reset/dist/reset.min.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
