import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import { FooterContent, FooterInner, FooterWrapper } from '@/components/organisms/footer/style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'

const Footer = (): JSX.Element => {
  const { t } = useLocale()

  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterContent>
            <VerticalTextBoldLink>
              <Link href={'/'} passHref>
                <a>{t.TITLE}</a>
              </Link>
              <i></i>
            </VerticalTextBoldLink>
            <VerticalTextNormalLink>
              <Link href={'/local/hokkaido'} passHref>
                <a>{t.HOKKAIDO_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/tohoku'} passHref>
                <a>{t.TOHOKU_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kanto'} passHref>
                <a>{t.KANTO_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chubu'} passHref>
                <a>{t.TOHOKU_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kansai'} passHref>
                <a>{t.KANSAI_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/chugoku'} passHref>
                <a>{t.CHUGOKU_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/shikoku'} passHref>
                <a>{t.SHIKOKU_REGION}</a>
              </Link>
              <i></i>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <Link href={'/local/kyushu-okinawa'} passHref>
                <a>{t.KYUSHU_OKINAWA_REGION}</a>
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
