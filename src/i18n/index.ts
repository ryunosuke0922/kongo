import { useRouter } from 'next/router'
import en from './en'
import ja, { type LocaleMessages } from './ja'
import zhCN from './zhCN'
import zhTW from './zhTW'

export type SupportedLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW'

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'ja', 'zh-CN', 'zh-TW']

type LocaleResult = {
  locale: SupportedLocale
  t: LocaleMessages
}

export const useLocale = (): LocaleResult => {
  const { locale } = useRouter()
  const currentLocale: SupportedLocale =
    locale === 'en' || locale === 'zh-CN' || locale === 'zh-TW' ? locale : 'ja'
  const messages: Record<SupportedLocale, LocaleMessages> = {
    en,
    ja,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  }

  return { locale: currentLocale, t: messages[currentLocale] }
}
