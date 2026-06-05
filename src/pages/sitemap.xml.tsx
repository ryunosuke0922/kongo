import { GetServerSidePropsContext } from 'next'
import { getAllMountains, MOUNTAIN_LISTS } from '@/constants/mountainLists'
import { SUPPORTED_LOCALES } from '@/i18n/index'
import { toAbsoluteUrl, toLocalizedPath, withTrailingSlash } from '@/utils/seoPaths'

type Post = {
  path: string
  basePath: string
}

const SITEMAP_LASTMOD = '2026-06-05T00:00:00.000Z'

const escapeXml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

async function getAllPosts(): Promise<Post[]> {
  const regionPaths = [
    '/local/hokkaido',
    '/local/tohoku',
    '/local/kanto',
    '/local/chubu',
    '/local/kansai',
    '/local/chugoku',
    '/local/shikoku',
    '/local/kyushu-okinawa',
  ]
  const guidePaths = [
    '/guides/mountains-near-tokyo',
    '/guides/japanese-alps-mountains',
    '/guides/highest-mountains-in-japan',
    '/guides/low-mountains-in-japan',
  ]
  const listPaths = MOUNTAIN_LISTS.map((list) => list.path)
  const mountainPaths = getAllMountains().map((mountain) => `/mountains/${mountain.slug}`)

  const basePaths = ['/', '/local', ...regionPaths, ...guidePaths, ...listPaths, ...mountainPaths]

  const localizedPosts = SUPPORTED_LOCALES.flatMap((locale) =>
    basePaths.map((path) => ({
      path: toLocalizedPath(path, locale),
      basePath: withTrailingSlash(path),
    })),
  )

  const seen = new Set<string>()

  return localizedPosts.filter((post) => {
    if (seen.has(post.path)) {
      return false
    }
    seen.add(post.path)

    return true
  })
}

async function generateSitemapXml(): Promise<string> {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`

  const posts = await getAllPosts()
  posts.forEach((post) => {
    xml += `
      <url>
        <loc>${escapeXml(toAbsoluteUrl(post.path))}</loc>
        ${SUPPORTED_LOCALES.map(
          (locale) =>
            `<xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(
              toAbsoluteUrl(toLocalizedPath(post.basePath, locale)),
            )}" />`,
        ).join('')}
        <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
          toAbsoluteUrl(toLocalizedPath(post.basePath, 'ja')),
        )}" />
        <lastmod>${SITEMAP_LASTMOD}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  xml += `</urlset>`

  return xml
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const Page = () => null
export default Page
