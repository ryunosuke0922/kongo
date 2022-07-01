import styled from 'styled-components'

export const VerticalTitle = styled.h1`
  font-size: 5.4rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
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
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  > a {
    position: relative;
    transition: all ease-in-out 0.4s;
    &:before {
      content: '';
      position: absolute;
      top: -9rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0.1rem;
      height: 4rem;
      background-color: #555;
      transition: all ease-in-out 0.4s;
      @media screen and (min-width: 1920px) {
        top: -90px;
        width: 1px;
        height: 40px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: -9rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0.1rem;
      height: 4rem;
      background-color: #efefef;
      transition: all ease-in 0.4s;
      @media screen and (min-width: 1920px) {
        top: -90px;
        width: 1px;
        height: 40px;
      }
    }
    &:hover {
      opacity: 0.8;
      &:before {
        top: -5rem;
        @media screen and (min-width: 1920px) {
          top: -50px;
        }
      }
    }
  }
`
export const VerticalTextNormalLink = styled.div`
  font-size: 2.6rem;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  color: #333;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
  > a {
    position: relative;
    transition: all ease-in-out 0.4s;
    &:before {
      content: '';
      position: absolute;
      top: -9rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0.1rem;
      height: 4rem;
      background-color: #555;
      transition: all ease-in-out 0.4s;
      @media screen and (min-width: 1920px) {
        top: -90px;
        width: 1px;
        height: 40px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: -9rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0.1rem;
      height: 4rem;
      background-color: #efefef;
      transition: all ease-in 0.4s;
      @media screen and (min-width: 1920px) {
        top: -90px;
        width: 1px;
        height: 40px;
      }
    }
    &:hover {
      opacity: 0.8;
      &:before {
        top: -5rem;
        @media screen and (min-width: 1920px) {
          top: -50px;
        }
      }
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
