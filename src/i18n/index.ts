import { useRouter } from 'next/router'
import en from './en'
import ja, { type LocaleMessages } from './ja'

export type SupportedLocale = 'en' | 'ja'

type LocaleResult = {
  locale: SupportedLocale
  t: LocaleMessages
}

export const useLocale = (): LocaleResult => {
  const { locale } = useRouter()
  const currentLocale: SupportedLocale = locale === 'en' ? 'en' : 'ja'
  const t = currentLocale === 'en' ? en : ja

  return { locale: currentLocale, t }
}
