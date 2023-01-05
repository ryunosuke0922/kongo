import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import { FooterContent, FooterInner, FooterWrapper } from '@/components/organisms/footer/style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterContent>
            <VerticalTextBoldLink>
              <Link href={'/'} passHref>
                <a>日本百名山</a>
              </Link>
              <i></i>
            </VerticalTextBoldLink>
            <VerticalTextNormalLink>
              <Link href={'/local/hokkaido'} passHref>
                <a>北海道地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/tohoku'} passHref>
                <a>東北地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kanto'} passHref>
                <a>関東地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chubu'} passHref>
                <a>中部地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kansai'} passHref>
                <a>関西地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chugoku'} passHref>
                <a>中国地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/shikoku'} passHref>
                <a>四国地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kyushu-okinawa'} passHref>
                <a>九州・沖縄地方</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
          </FooterContent>
          <div className="footer__sns">
            <a href={'https://github.com/ryunosuke0922/kongo'} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare as IconProp} />
            </a>
            <a href={'https://twitter.com/yutomaeda3'} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare as IconProp} />
            </a>
            <a href={'https://twitter.com/ryunosuke092_'} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare as IconProp} />
            </a>
          </div>
          <div className="footer__copyright">
            <p>© 2022</p>
          </div>
        </FooterInner>
      </FooterWrapper>
    </footer>
  )
}

export default Footer
