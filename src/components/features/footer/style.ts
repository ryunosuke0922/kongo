import { activePillControl, pillHoverMotion } from '@/components/molecules/sharedSurfaces/style'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import Link from 'next/link'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background-color: ${UI_COLORS.surfaceSecondary};
  @media screen and (max-width: 768px) {
  }
`
export const FooterInner = styled.div`
  padding: 8.7rem 8.7rem 6rem;
  background-color: ${UI_COLORS.surfaceSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 6.4rem 8rem 4.8rem;
  }
  @media screen and (min-width: 1920px) {
    padding: 87px 87px 60px;
  }
`
export const FooterContent = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1920px) {
    width: 700px;
  }
`

export const FooterListNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${UI_SPACE.sm};
  width: 100%;
  max-width: 128rem;
  margin: 0 auto ${UI_SPACE.xl};

  @media screen and (min-width: 1920px) {
    max-width: 1280px;
  }
`

export const FooterListLink = styled(Link)<{ $active: boolean }>`
  ${activePillControl}
  ${pillHoverMotion}
  justify-content: center;
  min-height: 4rem;
  padding-top: 0;
  padding-right: ${UI_SPACE.md};
  padding-bottom: 0;
  padding-left: ${UI_SPACE.md};
  font-size: 1.6rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;

  @media screen and (min-width: 1920px) {
    min-height: 40px;
    padding-right: 12px;
    padding-left: 12px;
    font-size: 16px;
  }
`
export const FooterContentEn = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > div {
    width: fit-content;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1920px) {
    width: 700px;
  }
`
