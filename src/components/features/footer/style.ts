import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #efefef;
  @media screen and (max-width: 768px) {
  }
`
export const FooterInner = styled.div`
  padding: 8.7rem 8.7rem 6rem;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 6.4rem 8rem 4.8rem;
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1920px) {
    width: 700px;
  }
`
export const FooterContentEn = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > div {
    width: fit-content;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1920px) {
    width: 700px;
  }
`
