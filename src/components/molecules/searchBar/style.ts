import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { controlFieldBase } from '@/components/molecules/sharedControls/style'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 52rem;
  position: relative;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    max-width: none;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  left: ${UI_SPACE.md};
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: ${UI_COLORS.textSecondary};
  pointer-events: none;
`

export const SearchInput = styled.input`
  ${controlFieldBase}
  padding: 0 4.8rem 0 4rem;

  &::placeholder {
    color: ${UI_COLORS.textSecondary};
  }
`

export const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${UI_COLORS.textSecondary};
  font-size: 2rem;
  line-height: 1;
  padding: ${UI_SPACE.xs};
  cursor: pointer;

  &:hover {
    color: ${UI_COLORS.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${UI_COLORS.focus};
    outline-offset: 2px;
  }
`
