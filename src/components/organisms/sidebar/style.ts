import styled from 'styled-components'

export const Heading3 = styled.h3`
  font-size: 2.8rem;
  line-height: 1.5;
  margin: 0 0 1.6rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
    margin: 0 0 16px;
  }
`

export const Text = styled.div`
  font-size: 2.6rem;
  line-height: 1.5;
  padding: 0.4rem 0 0.4rem 1.6rem;
  margin: 0 0 0.8rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
    padding: 4px 0 4px 16px;
    margin: 0 0 8px;
  }
`

export const AsideContent = styled.aside`
  position: sticky;
  top: 2.6rem;
  width: 36.5rem;
  max-width: 365px;
  margin: 5.6rem 0 0;
  padding: 5.6rem 1rem 16rem;
  background-color: #f6f6f6;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    border-radius: 20px;
    top: 26px;
    margin: 56px 0 160px;
  }
`
