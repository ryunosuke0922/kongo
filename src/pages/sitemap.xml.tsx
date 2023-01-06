import { GetServerSidePropsContext } from 'next'

type Post = {
  path: string
}

async function getAllPosts(): Promise<Post[]> {
  return [
    { path: '/' },
    { path: '/local/hokkaido' },
    { path: '/local/tohoku' },
    { path: '/local/kanto' },
    { path: '/local/chubu' },
    { path: '/local/kansai' },
    { path: '/local/chugoku' },
    { path: '/local/shikoku' },
    { path: '/local/kyushu-okinawa' },
  ]
}

async function generateSitemapXml(): Promise<string> {
  const appHost = 'https://www.famous-mountains-in-japan.com/'
  const lastmod = '2023-01-01T00:00:00+00:00'

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // ここでurlを足していく
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
