import { BREAKPOINTS } from '@/constants/breakpoints'
import { mainContentFrame, pageContentFrame, PageWrapper } from '@/components/layouts/shared/style'
import styled from 'styled-components'

export const Wrapper = PageWrapper

export const WrapperContent = styled.section`
  ${pageContentFrame}
  width: 161.8rem;
  max-width: 1618px;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 2rem 0 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 80px 0 0;
  }
`

export const MainContent = styled.div`
  ${mainContentFrame}
  width: 118rem;
  max-width: 1180px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    display: block;
  }
`
