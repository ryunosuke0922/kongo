import { BREAKPOINTS } from '@/constants/breakpoints'
import { ControlLabel } from '@/components/molecules/sharedControls/style'
import { UI_COLORS, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import styled from 'styled-components'

export const SortWrapper = styled.div`
  width: 100%;
  display: block;
`

export const SortLabel = styled(ControlLabel)``

export const SortTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${UI_SPACE.sm};
`

export const SortTagButton = styled.button<{ $active: boolean }>`
  min-height: 5rem;
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.pill};
  background-color: ${({ $active }) =>
    $active ? UI_COLORS.textPrimary : UI_COLORS.surfacePrimary};
  color: ${({ $active }) => ($active ? UI_COLORS.textInverted : UI_COLORS.textPrimary)};
  font-size: 1.6rem;
  line-height: 1;
  padding: 0 ${UI_SPACE.lg};
  cursor: pointer;
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
