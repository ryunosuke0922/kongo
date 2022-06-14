import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
import { FooterContent, FooterInner, FooterWrapper } from '@/components/organisms/footer/style'
import NLink from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterContent>
            <VerticalTextBoldLink>
              <NLink href={'/'} passHref>
                <a>日本の百名山</a>
              </NLink>
            </VerticalTextBoldLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/hokkaido'} passHref>
                <a>北海道地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/tohoku'} passHref>
                <a>東北地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/kanto'} passHref>
                <a>関東地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/chubu'} passHref>
                <a>中部地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/kansai'} passHref>
                <a>関西地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/chugoku'} passHref>
                <a>関西地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/shikoku'} passHref>
                <a>四国地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/local/kyushu-okinawa'} passHref>
                <a>九州・沖縄地方</a>
              </NLink>
            </VerticalTextNormalLink>
          </FooterContent>
          <div className="footer__copyright">
            <p>Copyright © 2022 yuto maeda.All Rights Reserved.</p>
          </div>
        </FooterInner>
      </FooterWrapper>
    </footer>
  )
}

export default Footer
