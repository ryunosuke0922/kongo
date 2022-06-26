import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
  }
`

export const WrapperContent = styled.section`
  width: 161.8rem;
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
  margin: 0;
  padding: 5.6rem 2.4rem 9.6rem;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem 3rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    padding: 56px 24px 96px;
    gap: 20px 30px;
  }
`

export const AsideContent = styled.aside`
  position: sticky;
  top: 8rem;
  width: 36.5rem;
  max-width: 365px;
  margin: 0;
  padding: 5.6rem 1rem;
  background-color: #fafafa;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    border-radius: 20px;
    top: 80px;
  }
`
