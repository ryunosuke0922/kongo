import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    height: 100px;
  }
`
export const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    padding: 20px 40px;
  }
  img {
    width: 8rem;
    display: block;
    @media screen and (max-width: 768px) {
    }
    @media screen and (min-width: 1920px) {
      width: 80px;
    }
  }
`
