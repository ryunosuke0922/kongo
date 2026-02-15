import NextDocument, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

type Props = DocumentInitialProps & {
  locale?: string
}

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      locale: ctx.locale,
    }
  }

  render() {
    const lang = this.props.locale === 'en' ? 'en' : 'ja'

    return (
      <Html lang={lang}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
