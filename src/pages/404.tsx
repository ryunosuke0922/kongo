import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { useLocale } from '../i18n/index'

const Err = styled.div`
  background: #fafafa;
  background: url(https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif) no-repeat center center
    fixed;
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  h1 {
    font-size: 16em;
    margin: 0.2em 0.5em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0px;
  }
  h2 {
    font-size: 1.7em;
    margin: 0.2em 0.5em;
    color: rgba(255, 255, 255, 0.6);
  }

  .error {
    position: absolute;
    top: 30%;
    margin-top: -8em;
    width: 100%;
    text-align: center;
    > a {
      display: block;
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline;
      margin: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .material-icons {
    font-size: 1.5em;
    position: relative;
    top: 10px;
  }
`
const Err404: NextPage = () => {
  const { t } = useLocale()

  return (
    <Err>
      {/* <Header /> */}
      {/* <main className="main container"> */}
      <div className="error">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href={'/'} passHref>
          <a>{t.TITLE}</a>
        </Link>
      </div>
      {/* </main> */}
      {/* <Footer /> */}
    </Err>
  )
}

export default Err404
