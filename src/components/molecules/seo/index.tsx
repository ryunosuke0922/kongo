import Head from 'next/head'

type Props = {
  pageTitle: string
  pageDescription: string
  pagePath: string
}

const Seo = ({ pageTitle, pageDescription, pagePath }: Props) => {
  const defaultTitle = '日本百名山'
  const defaultDescription =
    '『日本百名山』は、深田久弥が執筆した山岳随筆集です。こちらの著書を参考に日本百名山を一覧にまとめました。'

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath

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
    </Head>
  )
}

export default Seo
