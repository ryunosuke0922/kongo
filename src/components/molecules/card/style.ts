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
`

export const TextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 2rem;
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

export const TextSmall = styled.p`
  color: #555;
  font-size: 2rem;
  line-height: 1.5;
  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
`
export const TextBig = styled.p`
  color: #555;
  font-size: 2.6rem;
  line-height: 1.5;
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }
`
