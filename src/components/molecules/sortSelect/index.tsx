import { ChangeEvent } from 'react'
import type { SortType } from '@/hooks/useMountainFilter'
import { SortField, SortLabel, SortWrapper } from './style'

type Option = {
  value: SortType
  label: string
}

type Props = {
  value: SortType
  label: string
  options: Option[]
  onChange: (value: SortType) => void
}

const SortSelect = ({ value, label, options, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as SortType)
  }

  return (
    <SortWrapper>
      <SortLabel>{label}</SortLabel>
      <SortField value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </SortField>
    </SortWrapper>
  )
}

export default SortSelect
