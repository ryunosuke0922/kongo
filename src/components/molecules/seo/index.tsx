import mountainsData from '@/data/mountains.json'
import { REGION_SEO_CONTENT } from '@/constants/seoContent'
import { DEFAULT_OG_IMAGE_PATH, GOOGLE_SITE_VERIFICATION, SITE_URL } from '@/constants/site'
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/index'
import type { MountainsData } from '@/types/mountains'
import { toAbsoluteUrl, toBaseLocalePath, toLocalizedPath } from '@/utils/seoPaths'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useLocale } from '../../../i18n/index'

type Props = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  breadcrumbs?: SeoBreadcrumb[]
  schemas?: Record<string, unknown>[]
}

type SeoBreadcrumb = {
  name: string
  path: string
}

const REGION_MOUNTAIN_IDS: Record<string, number[]> = {
  '/local/hokkaido': [1, 2, 3, 4, 5, 6, 7, 8, 9],
  '/local/tohoku': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28],
  '/local/kanto': [
    26, 29, 30, 36, 37, 38, 39, 40, 41, 42, 43, 44, 64, 65, 66, 67, 68, 69, 70, 71, 72, 77, 78, 79,
    80, 81,
  ],
  '/local/chubu': [
    1, 17, 19, 25, 26, 27, 30, 31, 32, 33, 34, 35, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89,
  ],
  '/local/kansai': [89, 90, 91],
  '/local/chugoku': [92],
  '/local/shikoku': [93, 94],
  '/local/kyushu-okinawa': [95, 96, 97, 98, 99, 100],
}

const toLocaleCode = (locale?: string): SupportedLocale => {
  if (locale === 'en' || locale === 'zh-CN' || locale === 'zh-TW') {
    return locale
  }

  return 'ja'
}

const OGP_LOCALE_CODES: Record<SupportedLocale, string> = {
  en: 'en_US',
  ja: 'ja_JP',
  'zh-CN': 'zh_CN',
  'zh-TW': 'zh_TW',
}

const uniqueByNo = (mountains: MountainsData[]): MountainsData[] => {
  const seen = new Set<number>()

  return mountains.filter((mountain) => {
    if (seen.has(mountain.no)) {
      return false
    }
    seen.add(mountain.no)

    return true
  })
}

const ALL_HYAKUMEIZAN_MOUNTAINS = uniqueByNo(mountainsData as MountainsData[])

const hasSiteName = (title: string, siteName: string): boolean => {
  return title.toLowerCase().includes(siteName.toLowerCase())
}

const toGeoCoordinates = (mountain: MountainsData) => {
  const hasValidLatitude =
    mountain.latitude !== 0 && mountain.latitude >= -90 && mountain.latitude <= 90
  const hasValidLongitude =
    mountain.longitude !== 0 && mountain.longitude >= -180 && mountain.longitude <= 180

  if (!hasValidLatitude || !hasValidLongitude) {
    return undefined
  }

  return {
    '@type': 'GeoCoordinates',
    latitude: mountain.latitude,
    longitude: mountain.longitude,
    elevation: mountain.elevation,
  }
}

const getLocalTitle = (locale: SupportedLocale): string => {
  if (locale === 'en') {
    return 'Japan Mountains by Region: 100 Famous Japanese Mountains'
  }
  if (locale === 'zh-CN') {
    return '按地区查找日本百名山'
  }
  if (locale === 'zh-TW') {
    return '依地區查找日本百名山'
  }

  return '地方別 日本百名山一覧'
}

const getLocalDescription = (locale: SupportedLocale): string => {
  if (locale === 'en') {
    return 'Browse the 100 Famous Japanese Mountains by region, from Hokkaido and Tohoku to the Japanese Alps, Kansai, Shikoku, Kyushu, and Okinawa.'
  }
  if (locale === 'zh-CN') {
    return '按北海道、东北、关东、中部、关西、四国、九州・冲绳等地区查找日本百名山。'
  }
  if (locale === 'zh-TW') {
    return '依北海道、東北、關東、中部、關西、四國、九州・沖繩等地區查找日本百名山。'
  }

  return '日本百名山を地方別に一覧で確認できます。'
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

const Seo = ({ pageTitle, pageDescription, pagePath, breadcrumbs, schemas = [] }: Props) => {
  const router = useRouter()
  const { t, locale } = useLocale()
  const localeCode = toLocaleCode(locale)
  const pathname = router.pathname || '/'
  const alternatePathname = pagePath ? toBaseLocalePath(pagePath) : pathname

  const regionLabelMap: Record<string, string> = {
    '/local/hokkaido': t.HOKKAIDO_REGION,
    '/local/tohoku': t.TOHOKU_REGION,
    '/local/kanto': t.KANTO_REGION,
    '/local/chubu': t.CHUBU_REGION,
    '/local/kansai': t.KANSAI_REGION,
    '/local/chugoku': t.CHUGOKU_REGION,
    '/local/shikoku': t.SHIKOKU_REGION,
    '/local/kyushu-okinawa': t.KYUSHU_OKINAWA_REGION,
  }
  const regionLabel = regionLabelMap[pathname]
  const regionSeoContent = REGION_SEO_CONTENT[pathname]

  const homeTitle =
    localeCode === 'en'
      ? '100 Famous Japanese Mountains: Japan Mountains List by Region'
      : localeCode === 'zh-TW'
        ? '日本百名山一覽 | 依地區與標高尋找日本名山'
        : localeCode === 'zh-CN'
          ? '日本百名山一览 | 按地区与海拔寻找日本名山'
          : '日本百名山一覧 | 都道府県・標高で探せる'
  const homeDescription =
    localeCode === 'en'
      ? "A complete English list of Japan's 100 Famous Japanese Mountains selected by Hisaya Fukada. Search mountains in Japan by name, region, prefecture, and elevation."
      : localeCode === 'zh-TW'
        ? '介紹日本百名山100座，可依山名、地區、都道府縣與標高搜尋。'
        : localeCode === 'zh-CN'
          ? '介绍日本百名山100座，可按山名、地区、都道府县和海拔搜索。'
          : '深田久弥が選定した日本百名山を一覧で紹介。山名検索、都道府県絞り込み、標高順ソートで目的の山をすぐに探せます。'
  const localTitle = getLocalTitle(localeCode)
  const localDescription = getLocalDescription(localeCode)

  let defaultTitle = homeTitle
  let defaultDescription = homeDescription
  if (pathname === '/local') {
    defaultTitle = localTitle
    defaultDescription = localDescription
  } else if (regionLabel) {
    defaultTitle = getRegionTitle(localeCode, regionLabel, regionSeoContent?.englishTitle)
    defaultDescription = getRegionDescription(
      localeCode,
      regionLabel,
      regionSeoContent?.japaneseDescription,
      regionSeoContent?.englishDescription,
    )
  }

  const titleBase = pageTitle || defaultTitle
  const title =
    titleBase === t.TITLE || hasSiteName(titleBase, t.TITLE)
      ? titleBase
      : `${titleBase} | ${t.TITLE}`
  const description = pageDescription || defaultDescription

  const canonicalPath = pagePath || toLocalizedPath(pathname, localeCode)
  const canonicalUrl = toAbsoluteUrl(canonicalPath)
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

  const breadcrumbItems = breadcrumbs
    ? breadcrumbs.map((breadcrumb) => ({
        name: breadcrumb.name,
        item: toAbsoluteUrl(toLocalizedPath(breadcrumb.path, localeCode)),
      }))
    : [{ name: t.TITLE, item: toAbsoluteUrl(toLocalizedPath('/', localeCode)) }]
  if (!breadcrumbs && pathname.startsWith('/local')) {
    breadcrumbItems.push({
      name: localTitle,
      item: toAbsoluteUrl(toLocalizedPath('/local', localeCode)),
    })
  }
  if (!breadcrumbs && regionLabel) {
    breadcrumbItems.push({
      name: regionLabel,
      item: toAbsoluteUrl(toLocalizedPath(pathname, localeCode)),
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

  const regionIds = REGION_MOUNTAIN_IDS[pathname]
  let targetMountains: MountainsData[] = []
  if (pathname === '/') {
    targetMountains = ALL_HYAKUMEIZAN_MOUNTAINS
  } else if (regionIds) {
    const regionSet = new Set(regionIds)
    targetMountains = ALL_HYAKUMEIZAN_MOUNTAINS.filter((mountain) => regionSet.has(mountain.no))
  }

  const itemListSchema =
    targetMountains.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: regionLabel || t.INFO,
          numberOfItems: targetMountains.length,
          itemListElement: targetMountains.map((mountain, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'TouristAttraction',
              identifier: `nihon-hyakumeizan-${mountain.no}`,
              name: localeCode === 'en' ? mountain.nameEn : mountain.name,
              alternateName: localeCode === 'en' ? mountain.name : mountain.nameEn,
              description:
                localeCode === 'en'
                  ? `${mountain.nameEn} is one of the 100 Famous Japanese Mountains in ${mountain.prefecturesEn}.`
                  : `${mountain.name}は${mountain.prefectures}にある日本百名山の一座です。`,
              geo: toGeoCoordinates(mountain),
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'JP',
                addressRegion: localeCode === 'en' ? mountain.prefecturesEn : mountain.prefectures,
              },
            },
          })),
        }
      : null

  const faqSchema =
    pathname === '/' || pathname === '/local'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity:
            localeCode === 'en'
              ? [
                  {
                    '@type': 'Question',
                    name: 'What are the 100 Famous Japanese Mountains?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'They are 100 notable mountains in Japan selected by Hisaya Fukada, known in Japanese as Nihon Hyakumeizan.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How can I find mountains in Japan on this site?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'You can search by mountain name and filter the list by region, prefecture, and elevation.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Which famous mountains in Japan are included?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The list includes well-known Japanese mountains such as Mount Fuji, Tateyama, Hakusan, Yarigatake, Hotaka, Daisetsu, Aso, and many other regional peaks.',
                    },
                  },
                ]
              : [
                  {
                    '@type': 'Question',
                    name: '日本百名山とは何ですか？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '深田久弥が選定した100座の山をまとめた山岳リストです。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'このサイトではどのように山を探せますか？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '山名検索や地方別・標高別の絞り込みで目的の山を探せます。',
                    },
                  },
                ],
        }
      : null

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>
      {itemListSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        ></script>
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        ></script>
      ) : null}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
      ))}
    </Head>
  )
}

export default Seo
