import { Field } from '@astryxdesign/core/Field'
import { Icon } from '@astryxdesign/core/Icon'
import { useId } from 'react'

type Props = {
  value: string
  label: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

const FilterSelect = ({ value, label, options, onChange }: Props) => {
  const id = useId()

  return (
    <Field label={label} inputID={id}>
      <div className="mountain-select-control">
        <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon icon="chevronDown" aria-hidden="true" />
      </div>
    </Field>
  )
}

export default FilterSelect
