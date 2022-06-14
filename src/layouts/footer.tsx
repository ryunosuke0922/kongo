import { FooterContent, FooterInner, FooterWrapper } from '@/components/atoms/layout_footer/style'
import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'
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
              <NLink href={'/hokkaido'} passHref>
                <a>北海道地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/tohoku'} passHref>
                <a>東北地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/kanto'} passHref>
                <a>関東地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/chubu'} passHref>
                <a>中部地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/kansai'} passHref>
                <a>関西地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/chugoku'} passHref>
                <a>関西地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/shikoku'} passHref>
                <a>四国地方</a>
              </NLink>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <NLink href={'/kyushu-okinawa'} passHref>
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
