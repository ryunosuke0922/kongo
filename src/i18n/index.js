import { useRouter } from 'next/router'
import en from './en'
import ja from './ja'

export const useLocale = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : ja

  return { locale, t }
}
