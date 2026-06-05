import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import styled, { css } from 'styled-components'

export const pageLeadText = css`
  width: 100%;
  margin: 0 0 ${UI_SPACE.xl};
  color: ${UI_COLORS.textSecondary};
  font-size: 1.8rem;
  line-height: 1.8;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 18px;
  }
`

export const PageLead = styled.p`
  ${pageLeadText}
`

export const sectionTitleText = css`
  margin: 0 0 ${UI_SPACE.sm};
  color: ${UI_COLORS.textPrimary};
  font-size: 2.4rem;
  line-height: 1.4;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.8rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 24px;
  }
`

export const sectionDescriptionText = css`
  margin: 0 0 ${UI_SPACE.lg};
  color: ${UI_COLORS.textSecondary};
  font-size: 1.7rem;
  line-height: 1.6;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 17px;
  }
`

export const sectionPanel = css`
  width: 100%;
  margin: 0 0 ${UI_SPACE.xl};
  padding: ${UI_SPACE.xl};
  border: 1px solid ${UI_COLORS.borderSubtle};
  border-radius: ${UI_RADIUS.md};
  background: ${UI_COLORS.surfaceSecondary};

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    padding: ${UI_SPACE.lg};
  }
`

export const SectionPanel = styled.section`
  ${sectionPanel}
`

export const pillControl = css`
  display: inline-flex;
  align-items: center;
  min-height: 4.4rem;
  padding: ${UI_SPACE.sm} ${UI_SPACE.lg};
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.pill};
  color: ${UI_COLORS.textPrimary};
  background: ${UI_COLORS.surfacePrimary};
  font-size: 1.7rem;
  line-height: 1.4;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    min-height: 44px;
    font-size: 17px;
  }
`

export const activePillControl = css<{ $active: boolean }>`
  ${pillControl}
  border-color: ${({ $active }) => ($active ? UI_COLORS.textPrimary : UI_COLORS.borderSoft)};
  color: ${({ $active }) => ($active ? UI_COLORS.textInverted : UI_COLORS.textPrimary)};
  background: ${({ $active }) => ($active ? UI_COLORS.textPrimary : UI_COLORS.surfacePrimary)};
`

export const pillHoverMotion = css`
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${UI_COLORS.focus};
    outline-offset: 2px;
  }
`

export const compactPillTag = css`
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  padding: ${UI_SPACE.xs} ${UI_SPACE.sm};
  overflow: hidden;
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.pill};
  color: ${UI_COLORS.textPrimary};
  background: ${UI_COLORS.surfacePrimary};
  font-size: 1.4rem;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 14px;
  }
`
