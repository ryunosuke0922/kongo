import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
  }
`

export const WrapperContent = styled.section`
  width: 100%;
  max-width: 1618px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
  }
`

export const MainContent = styled.main`
  width: 118rem;
  max-width: 1180px;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
  }
`
