import { ChangeEvent } from 'react'
import { FilterSelectField, FilterSelectLabel, FilterSelectWrapper } from './style'

type Option = {
  value: string
  label: string
}

type Props = {
  value: string
  label: string
  options: Option[]
  onChange: (value: string) => void
}

const FilterSelect = ({ value, label, options, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <FilterSelectWrapper>
      <FilterSelectLabel>{label}</FilterSelectLabel>
      <FilterSelectField value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelectField>
    </FilterSelectWrapper>
  )
}

export default FilterSelect
