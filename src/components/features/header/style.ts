import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
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
  padding: ${UI_SPACE.xl} 4rem;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px 40px;
  }
  > a {
    display: inline-flex;
    align-items: center;
    border-radius: ${UI_RADIUS.sm};

    &:focus-visible {
      outline: 2px solid ${UI_COLORS.focus};
      outline-offset: ${UI_SPACE.xs};
    }
  }
  .header__logo {
    width: 8rem;
    height: auto;
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
    background-color: ${UI_COLORS.surfacePrimary};
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: ${UI_RADIUS.sm};
    box-shadow:
      -2px -2px 5px ${UI_COLORS.shadowLight},
      3px 3px 5px ${UI_COLORS.shadowStrong};
    a {
      display: inline-block;
      font-size: 2.6rem;
      color: ${UI_COLORS.textPrimary};
      min-width: 6.4rem;
      padding: 1.4rem 2rem;
      text-align: center;
      background-color: ${UI_COLORS.surfacePrimary};
      transition:
        color 0.2s ease,
        background-color 0.2s ease;
      &.is-current {
        background-color: ${UI_COLORS.textSecondary};
        color: ${UI_COLORS.textInverted};
      }

      &:focus-visible {
        outline: 2px solid ${UI_COLORS.focus};
        outline-offset: -2px;
      }
    }
  }
`
