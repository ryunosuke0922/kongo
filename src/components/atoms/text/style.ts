import styled from 'styled-components'

export const VerticalTitle = styled.h1`
  font-size: 5.4rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  color: #111;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
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
  color: #333;
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  > a {
    transition: all ease-in-out 0.4s;
    &:hover {
      opacity: 0.8;
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
    left: 2.2rem;
    margin: 0 auto;
    background-color: currentColor;
    opacity: 0;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 1px;
      height: 60px;
      top: -70px;
      left: 22px;
    }
  }
`
export const VerticalTextNormalLink = styled.div`
  font-size: 2.6rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  color: #333;
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
  > a {
    transition: all ease-in-out 0.4s;
    &:hover {
      opacity: 0.8;
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
export const Heading2 = styled.h2`
  font-size: 3.2rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 32px;
  }
`
export const Heading3 = styled.h3`
  font-size: 2.8rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  span {
    font-size: 2rem;
    color: #999;
    padding-left: 1rem;
  }
`
export const Heading4 = styled.h4`
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
`
export const TextLarge = styled.p`
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
`
export const TextMiddle = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`
export const TextSmall = styled.p`
  font-size: 2.2rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
`
