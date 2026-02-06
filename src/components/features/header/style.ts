import { BREAKPOINTS } from '@/constants/breakpoints'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
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
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px 40px;
  }
  .header__logo {
    width: 8rem;
    display: block;
    @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    }
    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      width: 80px;
    }
  }
`

export const HeaderButton = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 4rem;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0.6rem;
    box-shadow:
      -2px -2px 5px rgba(255, 255, 255, 1),
      3px 3px 5px rgba(0, 0, 0, 0.3);
    button {
      width: 100%;
      display: block;
      border: none;
      padding: 0;
      background-color: #f6f6f6;
      &.is-current {
        background-color: #555;
        a {
          color: #fafafa;
        }
      }
      a {
        display: inline-block;
        font-size: 2.6rem;
        color: #333;
        padding: 1.4rem 3.6rem;
      }
    }
  }
`
