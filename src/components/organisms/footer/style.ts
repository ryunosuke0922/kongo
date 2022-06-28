import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #efefef;
  @media screen and (min-width: 768px) {
  }
`
export const FooterInner = styled.div`
  padding: 8.7rem 8.7rem 6rem;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    padding: 87px 87px 60px;
  }
`
export const FooterContent = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    width: 700px;
  }
`
