import Head from 'next/head'
import { useLocale } from '../../../i18n/index'

type Props = {
  pageTitle: string
  pageDescription: string
  pagePath: string
}

const Seo = ({ pageTitle, pageDescription, pagePath }: Props) => {
  const { t } = useLocale()

  const defaultTitle = t.TITLE
  const defaultDescription = t.DESCRIPTION

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '100 Famous Japanese Mountains. | 日本百名山',
    url: 'https://www.famous-mountains-in-japan.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.famous-mountains-in-japan.com/images/logo_hyaku.svg',
      height: '67',
      width: '56',
    },
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={'https://www.famous-mountains-in-japan.com/public/org.png'}
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
      <meta name="google-site-verification" content="gsUZ2YcVTPf9cquxfCKRyDeZJW35s4kFIn5MpXJx0NM" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Head>
  )
}

export default Seo
