import { BREAKPOINTS } from '@/constants/breakpoints'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import styled from 'styled-components'

export const FilterControls = styled.div`
  width: 100%;
  display: grid;
  gap: ${UI_SPACE.lg};
  margin: 0 0 ${UI_SPACE.md};
`

export const FilterRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${UI_SPACE.lg};
`

export const FilterRowMobileStack = styled(FilterRow)`
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: block;
  }
`

export const FilterItem = styled.div<{ $grow?: boolean }>`
  width: ${({ $grow }) => ($grow ? 'auto' : '28rem')};
  flex: ${({ $grow }) => ($grow ? '1 1 0' : '0 0 28rem')};

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    flex: 1 1 100%;
  }
`

export const FilterItemMobileSpacing = styled(FilterItem)`
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    &:not(:last-child) {
      margin: 0 0 ${UI_SPACE.lg};
    }
  }
`

export const ResultSummary = styled.p`
  width: 100%;
  margin: 0 0 ${UI_SPACE.lg};
  font-size: 1.9rem;
  color: ${UI_COLORS.textSecondary};
  line-height: 1.7;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.3rem;
  }
`

export const StatsSummary = styled.p`
  width: 100%;
  margin: 0 0 ${UI_SPACE.xl};
  font-size: 1.8rem;
  line-height: 1.7;
  color: ${UI_COLORS.textSecondary};

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 18px;
  }
`

export const EmptyText = styled.p`
  width: 100%;
  font-size: 2rem;
  color: ${UI_COLORS.textSecondary};
  line-height: 1.7;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.4rem;
  }
`
