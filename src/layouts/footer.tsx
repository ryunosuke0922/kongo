import { FooterContent, FooterInner, FooterWrapper } from '@/components/atoms/layout_footer/style'
import { VerticalTextBoldLink, VerticalTextNormalLink } from '@/components/atoms/text/style'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <FooterContent>
            <VerticalTextBoldLink>
              <a href="#">日本の百名山</a>
            </VerticalTextBoldLink>
            <VerticalTextNormalLink>
              <a href="#">北海道地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">東北地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">関東地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">中部地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">関西地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">中国地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">四国地方</a>
            </VerticalTextNormalLink>
            <VerticalTextNormalLink>
              <a href="#">九州・沖縄地方</a>
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
