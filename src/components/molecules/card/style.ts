import styled from 'styled-components'

export const Card = styled.div`
  width: 55rem;
  height: auto;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1920px) {
    width: 550px;
  }
  /* &:hover {
    > div {
      box-shadow: none;
      transition: all ease 0.8s;
    }
  } */
  a {
    visibility: hidden;
  }
  &:hover {
    a {
      visibility: visible;
    }
  }
`

export const TextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all ease 0.8s;

  @media screen and (min-width: 1920px) {
    padding: 20px;
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
