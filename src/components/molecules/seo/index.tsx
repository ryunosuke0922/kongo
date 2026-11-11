import { REGIONS } from '@/constants/regions'
import { DEFAULT_OG_IMAGE_PATH, GOOGLE_SITE_VERIFICATION, SITE_URL } from '@/constants/site'
import { SUPPORTED_LOCALES, useLocale, type SupportedLocale } from '@/i18n/index'
import { getLocalizedMountainName } from '@/i18n/mountains'
import type { UnifiedMountainData } from '@/types/mountains'
import { toAbsoluteUrl, toBaseLocalePath, toLocalizedPath } from '@/utils/seoPaths'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  breadcrumbs?: SeoBreadcrumb[]
  mountains?: UnifiedMountainData[]
  listName?: string
  schemas?: Record<string, unknown>[]
}

type SeoBreadcrumb = {
  name: string
  path: string
}

const OGP_LOCALE_CODES: Record<SupportedLocale, string> = {
  en: 'en_US',
  ja: 'ja_JP',
  'zh-CN': 'zh_CN',
  'zh-TW': 'zh_TW',
}

const hasSiteName = (title: string, siteName: string): boolean => {
  return title.toLowerCase().includes(siteName.toLowerCase())
}

const getRegionTitle = (
  locale: SupportedLocale,
  regionLabel: string,
  englishTitle?: string,
): string => {
  if (locale === 'en') {
    return `${englishTitle || regionLabel} | 100 Famous Japanese Mountains`
  }
  if (locale === 'zh-CN') {
    return `${regionLabel}日本百名山一览`
  }
  if (locale === 'zh-TW') {
    return `${regionLabel}日本百名山一覽`
  }

  return `${regionLabel}の日本百名山一覧`
}

const getRegionDescription = (
  locale: SupportedLocale,
  regionLabel: string,
  japaneseDescription?: string,
  englishDescription?: string,
): string => {
  if (locale === 'en') {
    return englishDescription || `Browse the famous mountains in the ${regionLabel}.`
  }
  if (locale === 'zh-CN') {
    return `可查看${regionLabel}的日本百名山、海拔、都道府县与详情页。`
  }
  if (locale === 'zh-TW') {
    return `可查看${regionLabel}的日本百名山、標高、都道府縣與詳細頁。`
  }

  return japaneseDescription || `${regionLabel}に含まれる日本百名山を一覧で確認できます。`
}

const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  breadcrumbs,
  mountains,
  listName,
  schemas = [],
}: Props) => {
  const router = useRouter()
  const { t, locale: localeCode } = useLocale()
  const pathname = router.pathname || '/'
  const alternatePathname = pagePath ? toBaseLocalePath(pagePath) : pathname

  const region = REGIONS.find(({ path }) => path === (pagePath ?? pathname))
  const regionLabel = region ? t[region.labelKey] : ''

  let defaultTitle = t.SEO_HOME_TITLE
  let defaultDescription = t.SEO_HOME_DESCRIPTION
  if (pathname === '/local') {
    defaultTitle = t.SEO_LOCAL_TITLE
    defaultDescription = t.SEO_LOCAL_DESCRIPTION
  } else if (region) {
    defaultTitle = getRegionTitle(localeCode, regionLabel, region.englishTitle)
    defaultDescription = getRegionDescription(
      localeCode,
      regionLabel,
      region.japaneseDescription,
      region.englishDescription,
    )
  }

  const titleBase = pageTitle || defaultTitle
  const title =
    titleBase === t.TITLE || hasSiteName(titleBase, t.TITLE)
      ? titleBase
      : `${titleBase} | ${t.TITLE}`
  const description = pageDescription || defaultDescription

  const jaUrl = toAbsoluteUrl(toLocalizedPath(alternatePathname, 'ja'))
  const enUrl = toAbsoluteUrl(toLocalizedPath(alternatePathname, 'en'))
  const zhCnUrl = toAbsoluteUrl(toLocalizedPath(alternatePathname, 'zh-CN'))
  const zhTwUrl = toAbsoluteUrl(toLocalizedPath(alternatePathname, 'zh-TW'))
  const alternateLocaleUrls: Record<SupportedLocale, string> = {
    en: enUrl,
    ja: jaUrl,
    'zh-CN': zhCnUrl,
    'zh-TW': zhTwUrl,
  }

  const canonicalUrl = alternateLocaleUrls[localeCode]

  const breadcrumbItems = breadcrumbs
    ? breadcrumbs.map((breadcrumb) => ({
        name: breadcrumb.name,
        item: toAbsoluteUrl(toLocalizedPath(breadcrumb.path, localeCode)),
      }))
    : [{ name: t.TITLE, item: toAbsoluteUrl(toLocalizedPath('/', localeCode)) }]
  if (!breadcrumbs && pathname.startsWith('/local')) {
    breadcrumbItems.push({
      name: t.SEO_LOCAL_TITLE,
      item: toAbsoluteUrl(toLocalizedPath('/local', localeCode)),
    })
  }
  if (!breadcrumbs && region) {
    breadcrumbItems.push({
      name: regionLabel,
      item: toAbsoluteUrl(toLocalizedPath(region.path, localeCode)),
    })
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '100 Famous Japanese Mountains | 日本百名山',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo_hyaku.svg`,
      height: '67',
      width: '56',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t.TITLE,
    url: `${SITE_URL}/`,
    inLanguage: localeCode,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${toAbsoluteUrl(toLocalizedPath('/', localeCode))}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.item,
    })),
  }

  const itemListSchema = mountains && {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName || regionLabel || t.INFO,
    numberOfItems: mountains.length,
    itemListElement: mountains.map((mountain, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: getLocalizedMountainName(mountain, localeCode),
      url: toAbsoluteUrl(toLocalizedPath(`/mountains/${mountain.slug}`, localeCode)),
    })),
  }
  const pageSchemas = [
    organizationSchema,
    websiteSchema,
    ...(breadcrumbItems.length > 1 ? [breadcrumbSchema] : []),
    ...(itemListSchema ? [itemListSchema] : []),
    ...schemas,
  ]

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={t.TITLE} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={OGP_LOCALE_CODES[localeCode]} />
      {SUPPORTED_LOCALES.filter((alternateLocale) => alternateLocale !== localeCode).map(
        (alternateLocale) => (
          <meta
            key={`og-locale-alternate-${alternateLocale}`}
            property="og:locale:alternate"
            content={OGP_LOCALE_CODES[alternateLocale]}
          />
        ),
      )}
      <meta property="og:image" content={toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH)} />
      <link rel="canonical" href={canonicalUrl} />
      {SUPPORTED_LOCALES.map((alternateLocale) => (
        <link
          key={`hreflang-${alternateLocale}`}
          rel="alternate"
          hrefLang={alternateLocale}
          href={alternateLocaleUrls[alternateLocale]}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={jaUrl} />
      <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        ></script>
      ))}
    </Head>
  )
}

export default Seo
