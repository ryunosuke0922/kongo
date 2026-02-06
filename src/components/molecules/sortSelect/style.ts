import { BREAKPOINTS } from '@/constants/breakpoints'
import styled from 'styled-components'

export const SortWrapper = styled.div`
  width: 100%;
  display: block;
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

export const SortTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const SortTagButton = styled.button<{ $active: boolean }>`
  min-height: 5rem;
  border: 1px solid rgba(50, 50, 50, 0.2);
  border-radius: 999px;
  background-color: ${({ $active }) => ($active ? '#333' : '#f6f6f6')};
  color: ${({ $active }) => ($active ? '#fafafa' : '#333')};
  font-size: 1.6rem;
  line-height: 1;
  padding: 0 1.6rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    min-height: 5.6rem;
    font-size: 2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    min-height: 50px;
    font-size: 16px;
    padding: 0 16px;
  }
`
