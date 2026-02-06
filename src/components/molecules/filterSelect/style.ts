import { controlFieldBase, ControlLabel } from '@/components/molecules/sharedControls/style'
import { UI_SPACE } from '@/constants/ui'
import styled from 'styled-components'

export const FilterSelectWrapper = styled.label`
  width: 100%;
  display: block;
`

export const FilterSelectLabel = styled(ControlLabel)``

export const FilterSelectField = styled.select`
  ${controlFieldBase}
  padding: 0 ${UI_SPACE.md};
  text-align: left;
  text-align-last: left;
`
