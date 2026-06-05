import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS } from '@/constants/ui'
import styled, { css } from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`

export const pageContentFrame = css`
  margin: 0 auto;
  padding: 8rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    display: block;
  }
`

export const mainContentFrame = css`
  margin: 0;
  padding: 5.6rem 2.4rem 16rem;
  background-color: ${UI_COLORS.surfacePrimary};
  display: flex;
  gap: 2rem 3rem;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 5.6rem 3.6rem 12rem;
    gap: 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 56px 24px 160px;
    gap: 20px 30px;
  }
`
