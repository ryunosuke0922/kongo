import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import { FooterContent, FooterInner, FooterWrapper } from '@/components/organisms/footer/style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faTwitter,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterContent>
            <VerticalTextBoldLink>
              <Link href={'/'}>
                <a>日本の百名山</a>
              </Link>
            </VerticalTextBoldLink>
            <VerticalTextNormalLink>
              <Link href={'/local/hokkaido'}>
                <a>北海道地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/tohoku'}>
                <a>東北地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kanto'}>
                <a>関東地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chubu'}>
                <a>中部地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kansai'}>
                <a>関西地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chugoku'}>
                <a>中国地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/shikoku'}>
                <a>四国地方</a>
              </Link>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kyushu-okinawa'}>
                <a>九州・沖縄地方</a>
              </Link>
            </VerticalTextNormalLink>
          </FooterContent>
          <div className="footer__copyright">
            <p>Copyright © 2022 yuto maeda.All Rights Reserved.</p>
          </div>
        </FooterInner>
        <a href={'https://github.com/ryunosuke0922/kongo'} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubAlt as IconProp} />
          <FontAwesomeIcon icon={faGithub as IconProp} />
          <FontAwesomeIcon icon={faGithubSquare as IconProp} />
        </a>
        <a href={'https://twitter.com/yutomaeda3'} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare as IconProp} />
          <FontAwesomeIcon icon={faTwitter as IconProp} />
        </a>
      </FooterWrapper>
    </footer>
  )
}

export default Footer
