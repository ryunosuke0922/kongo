import mountainsData from '@/data/mountains.json'
import type { MountainsData } from '@/types/mountains'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useLocale, type SupportedLocale } from '../../../i18n/index'

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

const toLocalePath = (pathname: string, locale: SupportedLocale): string => {
  const suffix = pathname === '/' ? '' : pathname
  const prefix = locale === 'en' ? '/en' : '/ja'

  return `${prefix}${suffix}`
}

const toAbsoluteUrl = (path: string): string => {
  return `${SITE_URL}${path}`
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
  const pathname = router.pathname || '/'
  const localIndexTitle = locale === 'en' ? 'Regional List' : '地方別一覧'

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

  let defaultTitle = t.TITLE
  let defaultDescription =
    locale === 'en'
      ? "A complete list of Japan's 100 famous mountains selected by Hisaya Fukada."
      : '深田久弥が選定した日本百名山を一覧で紹介しています。'

  if (pathname === '/local') {
    defaultTitle = localIndexTitle
    defaultDescription =
      locale === 'en'
        ? 'Browse the 100 famous Japanese mountains by region.'
        : '日本百名山を地方別に探せます。'
  }

  if (regionLabel) {
    defaultTitle = regionLabel
    defaultDescription =
      locale === 'en'
        ? `Browse the 100 famous Japanese mountains in the ${regionLabel}.`
        : `${regionLabel}の日本百名山一覧です。`
  }

  const titleBase = pageTitle ?? defaultTitle
  const title = titleBase === t.TITLE ? titleBase : `${titleBase} | ${t.TITLE}`
  const description = pageDescription ?? defaultDescription

  const canonicalPath = pagePath ?? toLocalePath(pathname, locale)
  const canonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : toAbsoluteUrl(canonicalPath)

  const jaUrl = toAbsoluteUrl(toLocalePath(pathname, 'ja'))
  const enUrl = toAbsoluteUrl(toLocalePath(pathname, 'en'))

  const breadcrumbs = [{ name: t.TITLE, item: toAbsoluteUrl(toLocalePath('/', locale)) }]
  if (pathname.startsWith('/local')) {
    breadcrumbs.push({
      name: localIndexTitle,
      item: toAbsoluteUrl(toLocalePath('/local', locale)),
    })
  }
  if (regionLabel) {
    breadcrumbs.push({
      name: regionLabel,
      item: toAbsoluteUrl(toLocalePath(pathname, locale)),
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
    inLanguage: locale,
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

  const regionIds = REGION_MOUNTAIN_IDS[pathname]
  let targetMountains: MountainsData[] = []
  if (pathname === '/') {
    targetMountains = uniqueByNo(mountainsData as MountainsData[])
  } else if (regionIds) {
    const regionIdSet = new Set(regionIds)
    targetMountains = uniqueByNo(
      (mountainsData as MountainsData[]).filter((mountain) => regionIdSet.has(mountain.no)),
    )
  }

  const itemListSchema =
    targetMountains.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: regionLabel ? `${regionLabel} mountain list` : t.INFO,
          itemListElement: targetMountains.map((mountain, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'TouristAttraction',
              name: locale === 'en' ? mountain.nameEn : mountain.name,
              alternateName: locale === 'en' ? mountain.name : mountain.nameEn,
              description: locale === 'en' ? mountain.prefecturesEn : mountain.prefectures,
            },
          })),
        }
      : null

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={t.TITLE} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}/org.png`} />
      <meta name="twitter:card" content="summary_large_image" />
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
    </Head>
  )
}

export default Seo
