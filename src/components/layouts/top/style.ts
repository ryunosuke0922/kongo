import { BREAKPOINTS } from '@/constants/breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
  }
`

export const WrapperContent = styled.section`
  width: 161.8rem;
  max-width: 1618px;
  margin: 0 auto;
  padding: 8rem 0 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 2rem 0 0;
    width: 100%;
    display: block;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 80px 0 0;
  }
`

export const MainContent = styled.div`
  width: 118rem;
  max-width: 1180px;
  margin: 0;
  padding: 5.6rem 2.4rem 16rem;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem 3rem;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    padding: 5.6rem 3.6rem 12rem;
    gap: 0;
    display: block;
  }
  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 56px 24px 160px;
    gap: 20px 30px;
  }
`

export const FilterArea = styled.div`
  width: 100%;
  margin: 0 0 1.6rem;
`

export const FilterResult = styled.p`
  width: 100%;
  margin: 0 0 2rem;
  font-size: 2rem;
  color: #555;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 20px;
  }
`
