import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import styled from 'styled-components'

export const Card = styled.article`
  width: 55rem;
  height: auto;
  position: relative;
  transition: all ease 0.4s;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    margin: 0 0 2.4rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    width: 550px;
  }
  p,
  span {
    transition: all ease 0.4s;
  }
  &:hover {
    a {
      visibility: visible;
      opacity: 1;
      transform: translate(0, 0);
    }
    &:after {
      background-color: rgba(0, 0, 0, 0.3);
    }
    p,
    span {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${UI_RADIUS.sm};
    transition: all ease 0.8s;
    background-color: rgba(0, 0, 0, 0);
    mix-blend-mode: multiply;
    z-index: 10;
  }
`

export const TextBox = styled.div`
  width: 100%;
  height: auto;
  padding: ${UI_SPACE.xl};
  box-sizing: border-box;
  background-color: ${UI_COLORS.surfacePrimary};
  border-radius: ${UI_RADIUS.sm};
  border: 1px solid ${UI_COLORS.borderLight};
  box-shadow:
    -2px -2px 5px ${UI_COLORS.shadowLight},
    3px 3px 5px ${UI_COLORS.shadowSoft};
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px;
    border-radius: 6px;
  }
  .card__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 2rem;
    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      gap: 0 20px;
    }
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      margin: 0 0 ${UI_SPACE.sm};
      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        margin: 0 0 8px;
      }
    }
  }
  > a {
    color: ${UI_COLORS.textInverted};
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    content: '';
    bottom: ${UI_SPACE.xl};
    opacity: 0;
    visibility: hidden;
    transition: all ease 0.4s;
    z-index: 11;
    transform: translate(10px, 10px);
    @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
      bottom: 4rem;
      font-size: 2.2rem;
      opacity: 1;
      visibility: visible;
      color: ${UI_COLORS.textSecondary};
      text-decoration: underline;
    }
    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 16px;
      bottom: 20px;
    }
    &.link-yamap {
      right: 12rem;
      @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
        right: 17rem;
      }
      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        right: 120px;
      }
    }
    &.link-insta {
      right: 3rem;
      @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
        right: 4rem;
      }
      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        right: 30px;
      }
    }
    &:hover {
      transform: translate(0, -2px);
    }
  }
`
export const TextWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 0 ${UI_SPACE.lg};
  background-color: ${UI_COLORS.surfacePrimary};
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 3px 6px rgb(59 59 59 / 16%);
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    width: 40px;
    height: 40px;
    margin: 0 0 16px;
  }
`

export const TextId = styled.p`
  color: ${UI_COLORS.textPrimary};
  font-size: 1.6rem;
  line-height: 1;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 16px;
  }
`

export const TextMountain = styled.p`
  color: ${UI_COLORS.textPrimary};
  font-size: 2rem;
  line-height: 1.5;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 20px;
  }
  span {
    padding-left: ${UI_SPACE.xs};
    font-size: 2rem;
    @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
      font-size: 2.6rem;
    }
    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      padding-left: 4px;
      font-size: 20px;
    }
  }
  i {
    font-style: normal;
    margin: 0 0 0 1rem;
  }
`
export const TextName = styled.p`
  color: ${UI_COLORS.textPrimary};
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 26px;
  }
  span {
    padding-left: 1rem;
    font-size: 1.8rem;
    color: ${UI_COLORS.textMuted};
    @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
      font-size: 2.6rem;
    }
    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      font-size: 20px;
    }
  }
  i {
    font-style: normal;
    font-size: 1.8rem;
    margin: 0 0 0 1rem;
  }
`
