import { UI_COLORS } from '@/constants/ui'
import styled from 'styled-components'

export const VerticalTitle = styled.h1`
  font-size: 5.4rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  color: ${UI_COLORS.textPrimary};
  display: block;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 54px;
  }
`
export const HorizonTitle = styled.h1`
  font-size: 5.4rem;
  z-index: 7;
  /* -ms-writing-mode: tb-rl; */
  /* writing-mode: vertical-rl; */
  text-align: center;
  color: ${UI_COLORS.textPrimary};
  display: block;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 54px;
  }
`
export const VerticalDescription = styled.p`
  font-size: 2.8rem;
  line-height: 1.8;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: left;
  display: block;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  span {
    display: block;
  }
`

export const HorizonDescription = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  text-align: right;
  display: block;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  span {
    display: block;
  }
`
export const VerticalTextBoldLink = styled.div`
  font-size: 2.8rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  font-weight: bold;
  color: ${UI_COLORS.textPrimary};
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  > a {
    display: block;
    transition: all ease-in-out 0.4s;
    transform: translate(0, 0);
    &:hover {
      transform: translate(0, 5px);
      & + i {
        opacity: 1;
        overflow: visible;
        animation: line_to_bottom 2s ease infinite;
      }
    }
  }
  @keyframes line_to_bottom {
    0% {
      transform: scaleY(1);
      transform-origin: center bottom;
    }
    50% {
      transform: scaleY(0);
      transform-origin: center bottom;
    }
    51% {
      transform: scaleY(0);
      transform-origin: center top;
    }
    100% {
      transform: scaleY(1);
      transform-origin: center top;
    }
  }
  i {
    display: block;
    width: 1px;
    height: 6rem;
    position: absolute;
    top: -7rem;
    left: 2.15rem;
    margin: 0 auto;
    background-color: currentColor;
    opacity: 0;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 1px;
      height: 60px;
      top: -70px;
      left: 21.5px;
    }
  }
`
export const VerticalTextNormalLink = styled.div`
  font-size: 2.6rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  color: ${UI_COLORS.textPrimary};
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
  > a {
    display: block;
    transition: all ease-in-out 0.4s;
    transform: translate(0, 0);
    &:hover {
      transform: translate(0, 5px);
      & + i {
        opacity: 1;
        overflow: visible;
        animation: line_to_bottom 2s ease infinite;
      }
    }
  }
  @keyframes line_to_bottom {
    0% {
      transform: scaleY(1);
      transform-origin: center bottom;
    }
    50% {
      transform: scaleY(0);
      transform-origin: center bottom;
    }
    51% {
      transform: scaleY(0);
      transform-origin: center top;
    }
    100% {
      transform: scaleY(1);
      transform-origin: center top;
    }
  }
  i {
    display: block;
    width: 1px;
    height: 6rem;
    position: absolute;
    top: -7rem;
    left: 2.1rem;
    margin: 0 auto;
    background-color: currentColor;
    opacity: 0;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 1px;
      height: 60px;
      top: -70px;
      left: 21px;
    }
  }
`
export const HorizonTextNormalLink = styled.div`
  font-size: 2.6rem;
  /* -ms-writing-mode: tb-rl; */
  /* writing-mode: vertical-rl; */
  /* text-align: center; */
  color: ${UI_COLORS.textPrimary};
  position: relative;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
  > a {
    display: inline-block;
    transition: all ease-in-out 0.4s;
    transform: translate(0, 0);
    &:hover {
      transform: translate(5px, 0);
      & + i {
        opacity: 1;
        overflow: visible;
        animation: line_to_right 2s ease infinite;
      }
    }
  }
  @keyframes line_to_right {
    0% {
      transform: scaleX(1);
      transform-origin: right top;
    }
    50% {
      transform: scaleX(0);
      transform-origin: right top;
    }
    51% {
      transform: scaleX(0);
      transform-origin: left top;
    }
    100% {
      transform: scaleX(1);
      transform-origin: left top;
    }
  }
  i {
    display: block;
    width: 5rem;
    height: 1px;
    position: absolute;
    top: 2rem;
    left: -5rem;
    margin: 0 auto;
    background-color: currentColor;
    opacity: 0;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 50px;
      height: 1px;
      top: 20px;
      left: -50px;
    }
  }
`
export const Heading2 = styled.h2`
  font-size: 3.2rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 3.8rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 32px;
  }
`
export const Heading3 = styled.h3`
  font-size: 2.8rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 3.6rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  span {
    font-size: 2rem;
    color: ${UI_COLORS.textSubtle};
    padding-left: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 2.6rem;
      padding-left: 2rem;
    }
  }
`
export const Heading4 = styled.h4`
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
`
export const TextLarge = styled.p`
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
`
export const TextMiddle = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`
export const TextSmall = styled.p`
  font-size: 2.2rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
`
