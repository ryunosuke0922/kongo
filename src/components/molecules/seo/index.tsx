import mountainsData from '@/data/mountains.json'
import type { MountainsData } from '@/types/mountains'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useLocale } from '../../../i18n/index'

type Props = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
}

const SITE_URL = 'https://www.famous-mountains-in-japan.com'

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

const toLocaleCode = (locale?: string): 'ja' | 'en' => {
  return locale === 'en' ? 'en' : 'ja'
}

const withTrailingSlash = (path: string): string => {
  if (path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path : `${path}/`
}

const toLocalePath = (pathname: string, locale: 'ja' | 'en'): string => {
  const safePath = pathname || '/'
  const prefix = locale === 'en' ? '/en' : '/ja'

  if (safePath === '/') {
    return withTrailingSlash(prefix)
  }

  return withTrailingSlash(`${prefix}${safePath}`)
}

const toAbsoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${SITE_URL}${withTrailingSlash(path)}`
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

const Seo = ({ pageTitle, pageDescription, pagePath }: Props) => {
  const router = useRouter()
  const { t, locale } = useLocale()
  const localeCode = toLocaleCode(locale)
  const pathname = router.pathname || '/'

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

  const homeTitle =
    localeCode === 'en'
      ? '100 Famous Japanese Mountains List | Search by Region and Elevation'
      : '日本百名山一覧 | 都道府県・標高で探せる'
  const homeDescription =
    localeCode === 'en'
      ? "A complete list of Japan's 100 famous mountains selected by Hisaya Fukada. Find mountains by name, region, and elevation."
      : '深田久弥が選定した日本百名山を一覧で紹介。山名検索、都道府県絞り込み、標高順ソートで目的の山をすぐに探せます。'
  const localTitle =
    localeCode === 'en' ? 'Regional List of 100 Famous Japanese Mountains' : '地方別 日本百名山一覧'
  const localDescription =
    localeCode === 'en'
      ? 'Browse all 100 famous Japanese mountains by region.'
      : '日本百名山を地方別に一覧で確認できます。'

  let defaultTitle = homeTitle
  let defaultDescription = homeDescription
  if (pathname === '/local') {
    defaultTitle = localTitle
    defaultDescription = localDescription
  } else if (regionLabel) {
    defaultTitle =
      localeCode === 'en'
        ? `${regionLabel} | 100 Famous Mountains`
        : `${regionLabel}の日本百名山一覧`
    defaultDescription =
      localeCode === 'en'
        ? `Browse the famous mountains in the ${regionLabel}.`
        : `${regionLabel}に含まれる日本百名山を一覧で確認できます。`
  }

  const titleBase = pageTitle || defaultTitle
  const title = titleBase === t.TITLE ? titleBase : `${titleBase} | ${t.TITLE}`
  const description = pageDescription || defaultDescription

  const canonicalPath = pagePath || toLocalePath(pathname, localeCode)
  const canonicalUrl = toAbsoluteUrl(canonicalPath)
  const jaUrl = toAbsoluteUrl(toLocalePath(pathname, 'ja'))
  const enUrl = toAbsoluteUrl(toLocalePath(pathname, 'en'))

  const breadcrumbs = [{ name: t.TITLE, item: toAbsoluteUrl(toLocalePath('/', localeCode)) }]
  if (pathname.startsWith('/local')) {
    breadcrumbs.push({
      name: localTitle,
      item: toAbsoluteUrl(toLocalePath('/local', localeCode)),
    })
  }
  if (regionLabel) {
    breadcrumbs.push({
      name: regionLabel,
      item: toAbsoluteUrl(toLocalePath(pathname, localeCode)),
    })
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '100 Famous Japanese Mountains. | 日本百名山',
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
      target: `${SITE_URL}${toLocalePath('/', localeCode)}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.item,
    })),
  }

  const allMountains = uniqueByNo(mountainsData as MountainsData[])
  const regionIds = REGION_MOUNTAIN_IDS[pathname]
  let targetMountains: MountainsData[] = []
  if (pathname === '/') {
    targetMountains = allMountains
  } else if (regionIds) {
    const regionSet = new Set(regionIds)
    targetMountains = allMountains.filter((mountain) => regionSet.has(mountain.no))
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
              name: localeCode === 'en' ? mountain.nameEn : mountain.name,
              alternateName: localeCode === 'en' ? mountain.name : mountain.nameEn,
              description: localeCode === 'en' ? mountain.prefecturesEn : mountain.prefectures,
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
                    name: 'What is Nihon Hyakumeizan?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "It is a list of Japan's 100 famous mountains selected by Hisaya Fukada.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How can I find mountains on this site?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'You can search by mountain name and filter by region and elevation.',
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
      <meta property="og:image" content={`${SITE_URL}/org.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/org.png`} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={jaUrl} />
      <meta name="google-site-verification" content="gsUZ2YcVTPf9cquxfCKRyDeZJW35s4kFIn5MpXJx0NM" />
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
    </Head>
  )
}

export default Seo
