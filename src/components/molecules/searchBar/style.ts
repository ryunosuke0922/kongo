import { BREAKPOINTS } from '@/constants/breakpoints'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  position: relative;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    max-width: none;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  left: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: #555;
  pointer-events: none;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 4.8rem 0 4rem;
  border: 1px solid rgba(50, 50, 50, 0.2);
  border-radius: 0.8rem;
  background-color: #f6f6f6;
  font-size: 1.8rem;
  color: #333;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    height: 6rem;
    font-size: 2.2rem;
  }
`

export const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #555;
  font-size: 2rem;
  line-height: 1;
  padding: 0.4rem;
  cursor: pointer;
`
