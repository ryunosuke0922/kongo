import { mainContentFrame, pageContentFrame, PageWrapper } from '@/components/layouts/shared/style'
import styled from 'styled-components'

export const Wrapper = PageWrapper

export const WrapperContent = styled.section`
  ${pageContentFrame}
  width: 118rem;
  max-width: 1180px;
`

export const MainContent = styled.div`
  ${mainContentFrame}
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
`
