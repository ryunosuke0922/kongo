import { SortLabel, SortTagButton, SortTags, SortWrapper } from './style'

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

const SortSelect = ({ value, label, options, onChange }: Props) => {
  return (
    <SortWrapper role="radiogroup" aria-label={label}>
      <SortLabel>{label}</SortLabel>
      <SortTags>
        {options.map((option) => (
          <SortTagButton
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            $active={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </SortTagButton>
        ))}
      </SortTags>
    </SortWrapper>
  )
}

export default SortSelect
