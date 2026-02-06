import {
  HorizonTextNormalLink,
  VerticalTextBoldLink,
  VerticalTextNormalLink,
} from '@/components/atoms/text/style'
import {
  FooterContent,
  FooterContentEn,
  FooterInner,
  FooterWrapper,
} from '@/components/organisms/footer/style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useLocale } from '../../../i18n/index'

const Footer = () => {
  const { t, locale } = useLocale()

  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          {locale === 'en' ? (
            <FooterContentEn>
              <HorizonTextNormalLink>
                <Link href={'/'}>{t.TITLE}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/hokkaido'}>{t.HOKKAIDO_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/tohoku'}>{t.TOHOKU_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/kanto'}>{t.KANTO_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/chubu'}>{t.TOHOKU_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/kansai'}>{t.KANSAI_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/chugoku'}>{t.CHUGOKU_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/shikoku'}>{t.SHIKOKU_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
              <HorizonTextNormalLink>
                <Link href={'/local/kyushu-okinawa'}>{t.KYUSHU_OKINAWA_REGION}</Link>
                <i></i>
              </HorizonTextNormalLink>
            </FooterContentEn>
          ) : (
            <FooterContent>
              <VerticalTextBoldLink>
                <Link href={'/'}>{t.TITLE}</Link>
                <i></i>
              </VerticalTextBoldLink>
              <VerticalTextNormalLink>
                <Link href={'/local/hokkaido'}>{t.HOKKAIDO_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/tohoku'}>{t.TOHOKU_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/kanto'}>{t.KANTO_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/chubu'}>{t.TOHOKU_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/kansai'}>{t.KANSAI_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/chugoku'}>{t.CHUGOKU_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/shikoku'}>{t.SHIKOKU_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
              <VerticalTextNormalLink>
                <Link href={'/local/kyushu-okinawa'}>{t.KYUSHU_OKINAWA_REGION}</Link>
                <i></i>
              </VerticalTextNormalLink>
            </FooterContent>
          )}
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
