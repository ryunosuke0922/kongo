import { SITE_URL } from '@/constants/site'
import type { SupportedLocale } from '@/i18n/index'

export const withTrailingSlash = (path: string): string => {
  if (path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path : `${path}/`
}

export const toLocalizedPath = (pathname: string, locale: SupportedLocale): string => {
  const safePath = pathname || '/'
  const normalizedPath = withTrailingSlash(safePath)

  if (locale === 'ja') {
    return normalizedPath
  }

  if (normalizedPath === '/') {
    return withTrailingSlash(`/${locale}`)
  }

  return withTrailingSlash(`/${locale}${normalizedPath}`)
}

export const toAbsoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const hasAssetExtension = /\/[^/?#]+\.[^/?#]+($|[?#])/.test(path)
  const hasUrlSuffix = path.includes('?') || path.includes('#')

  return `${SITE_URL}${hasAssetExtension || hasUrlSuffix ? path : withTrailingSlash(path)}`
}

export const toBaseLocalePath = (path: string): string => {
  const normalizedPath = withTrailingSlash(path || '/')
  const localePrefix = normalizedPath.match(/^\/(en|zh-CN|zh-TW)(\/.*)$/)

  if (localePrefix) {
    return localePrefix[2] || '/'
  }

  return normalizedPath
}
