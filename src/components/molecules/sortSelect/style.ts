import { BREAKPOINTS } from '@/constants/breakpoints'
import styled from 'styled-components'

export const SortWrapper = styled.label`
  width: 28rem;
  display: block;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
  }
`

export const SortLabel = styled.span`
  display: block;
  margin: 0 0 0.8rem;
  font-size: 1.6rem;
  color: #555;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2rem;
  }
`

export const SortField = styled.select`
  width: 100%;
  height: 5rem;
  border: 1px solid rgba(50, 50, 50, 0.2);
  border-radius: 0.8rem;
  background-color: #f6f6f6;
  color: #333;
  font-size: 1.8rem;
  padding: 0 1.2rem;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    height: 6rem;
    font-size: 2.2rem;
  }
`
