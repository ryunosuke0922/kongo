import { GetServerSidePropsContext } from 'next'

type Post = {
  path: string
}

const withTrailingSlash = (path: string): string => {
  if (path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path : `${path}/`
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

  const jaPaths = ['/', '/local', ...regionPaths].map((path) => withTrailingSlash(path))
  const enPaths = jaPaths.map((path) => {
    if (path === '/') {
      return '/en/'
    }

    return withTrailingSlash(`/en${path}`)
  })

  const allPaths = Array.from(new Set([...jaPaths, ...enPaths]))

  return allPaths.map((path) => ({ path }))
}

async function generateSitemapXml(): Promise<string> {
  const appHost = 'https://www.famous-mountains-in-japan.com'
  const lastmod = new Date().toISOString()

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const posts = await getAllPosts()
  posts.forEach((post) => {
    xml += `
      <url>
        <loc>${appHost}${post.path}</loc>
        <lastmod>${lastmod}</lastmod>
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
