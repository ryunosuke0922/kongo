import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import { useLocale } from '@/i18n/index'
import { toLocalizedPath } from '@/utils/seoPaths'

const ErrorPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  padding: 8rem ${UI_SPACE.xl};
  background:
    linear-gradient(${UI_COLORS.imageOverlay}, ${UI_COLORS.imageOverlay}),
    url('/images/img03.webp') no-repeat center center;
  background-size: cover;
  color: ${UI_COLORS.textInverted};

  .error {
    width: min(100%, 72rem);
    text-align: center;
  }

  h1 {
    margin: 0 0 ${UI_SPACE.sm};
    font-size: 12rem;
    line-height: 1;
  }

  h2 {
    margin: 0 0 ${UI_SPACE.xl};
    font-size: 3rem;
    line-height: 1.4;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.8rem;
    padding: ${UI_SPACE.sm} ${UI_SPACE.xl};
    border: 1px solid ${UI_COLORS.borderLight};
    border-radius: ${UI_RADIUS.pill};
    background: ${UI_COLORS.pageBackground};
    color: ${UI_COLORS.textPrimary};
    font-size: 1.8rem;
    line-height: 1.4;
  }

  @media screen and (max-width: 768px) {
    padding: 8rem ${UI_SPACE.lg};

    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 2.8rem;
    }

    a {
      font-size: 2.2rem;
    }
  }
`

const Err404: NextPage = () => {
  const { t, locale } = useLocale()

  return (
    <>
      <Head>
        <title>
          {t.PAGE_NOT_FOUND} | {t.TITLE}
        </title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <ErrorPage>
        <div className="error">
          <h1>404</h1>
          <h2>{t.PAGE_NOT_FOUND}</h2>
          <Link href={toLocalizedPath('/', locale)}>{t.BACK_TO_HOME}</Link>
        </div>
      </ErrorPage>
    </>
  )
}

export default Err404
