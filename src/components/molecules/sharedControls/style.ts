import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_CONTROL, UI_RADIUS, UI_SPACE } from '@/constants/ui'
import styled, { css } from 'styled-components'

export const ControlLabel = styled.span`
  display: block;
  margin: 0 0 ${UI_SPACE.sm};
  font-size: ${UI_CONTROL.labelFontSize};
  color: ${UI_COLORS.textSecondary};

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: ${UI_CONTROL.labelFontSizeMobile};
  }
`

export const controlFieldBase = css`
  width: 100%;
  height: ${UI_CONTROL.fieldHeight};
  border: 1px solid ${UI_COLORS.borderSoft};
  border-radius: ${UI_RADIUS.md};
  background-color: ${UI_COLORS.surfacePrimary};
  color: ${UI_COLORS.textPrimary};
  font-size: ${UI_CONTROL.fieldFontSize};

  &:focus-visible {
    outline: 2px solid ${UI_COLORS.focus};
    outline-offset: 2px;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    height: ${UI_CONTROL.fieldHeightMobile};
    font-size: ${UI_CONTROL.fieldFontSizeMobile};
  }
`
