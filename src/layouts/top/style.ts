import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
  }
`

export const WrapperContent = styled.section`
  width: 100%;
  max-width: 1618px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
  }
`

export const MainContent = styled.div`
  width: 118rem;
  max-width: 1180px;
  margin: 0 auto;
  background-color: #fafafa;
  @media screen and (min-width: 768px) {
  }
`

export const AsideContent = styled.aside`
  width: 36.5rem;
  max-width: 365px;
  margin: 0 auto;
  background-color: #fafafa;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
  }
`
