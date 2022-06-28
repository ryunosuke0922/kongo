import styled from 'styled-components'

export const Card = styled.div`
  width: 55rem;
  height: auto;
  position: relative;
  transition: all ease 0.4s;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    width: 550px;
  }
  &:hover {
    a {
      visibility: visible;
      opacity: 1;
      transform: translate(0, 0);
    }
    &:after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.6rem;
    transition: all ease 0.8s;
    background-color: rgba(0, 0, 0, 0);
    mix-blend-mode: multiply;
    z-index: 10;
  }
`

export const TextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  @media screen and (min-width: 1920px) {
    padding: 20px;
    border-radius: 6px;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 2rem;
    @media screen and (min-width: 1920px) {
      gap: 0 20px;
    }
    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin: 0 0 1rem;
      @media screen and (min-width: 1920px) {
        margin: 0 0 10px;
      }
    }
  }
  > a {
    color: #333;
    font-size: 1.6rem;
    line-height: 1;
    color: white;
    position: absolute;
    content: '';
    bottom: 2rem;
    opacity: 0;
    visibility: hidden;
    transition: all ease 0.4s;
    z-index: 11;
    transform: translate(10px, 10px);
    &.link-yamap {
      right: 8em;
    }
    &.link-insta {
      right: 3rem;
    }
  }
`
export const TextWrapper = styled.p`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 0 1.6rem;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 3px 6px rgb(59 59 59 / 16%);
  @media screen and (min-width: 1920px) {
    width: 40px;
    height: 40px;
    margin: 0 0 16px;
  }
`

export const TextId = styled.p`
  color: #555;
  font-size: 1.6rem;
  line-height: 1;
  @media screen and (min-width: 1920px) {
    font-size: 16px;
  }
`

export const TextMountain = styled.p`
  color: #555;
  font-size: 2rem;
  line-height: 1.5;
  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
  span {
    padding-left: 0.4rem;
    font-size: 2rem;
    @media screen and (min-width: 1920px) {
      padding-left: 4px;
      font-size: 20px;
    }
  }
`
export const TextName = styled.p`
  color: #555;
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
  span {
    padding-left: 1rem;
    font-size: 2rem;
    color: #999;
  }
`
