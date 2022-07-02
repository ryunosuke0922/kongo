import styled from 'styled-components'

export const Heading3 = styled.h3`
  font-size: 2.8rem;
  line-height: 1.5;
  margin: 0 0 1.6rem;
  color: #111;
  position: relative;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
    margin: 0 0 16px;
  }
  > a {
    display: block;
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

export const Text = styled.div`
  font-size: 2.6rem;
  line-height: 1.5;
  padding: 0.4rem 0 0.4rem 1.6rem;
  margin: 0 0 0.8rem;
  color: #333;
  position: relative;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
    padding: 4px 0 4px 16px;
    margin: 0 0 8px;
  }
  > a {
    display: block;
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
    top: 2.2rem;
    left: -4rem;
    margin: 0 auto;
    background-color: currentColor;
    opacity: 0;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 50px;
      height: 1px;
      top: 22px;
      left: -40px;
    }
  }
`

export const AsideContent = styled.aside`
  position: sticky;
  top: 2.6rem;
  width: 36.5rem;
  max-width: 365px;
  margin: 5.6rem 0 0;
  padding: 5.6rem 1rem 16rem 2rem;
  background-color: #f6f6f6;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1920px) {
    border-radius: 20px;
    top: 26px;
    margin: 56px 0 160px;
    padding: 56px 10px 160px 20px;
  }
`
