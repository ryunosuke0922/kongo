import { ChangeEvent } from 'react'
import { ClearButton, SearchIcon, SearchInput, SearchWrapper } from './style'

type Props = {
  value: string
  placeholder: string
  ariaLabel: string
  onChange: (value: string) => void
  onClear: () => void
}

const SearchBar = ({ value, placeholder, ariaLabel, onChange, onClear }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <SearchWrapper>
      <SearchIcon aria-hidden>🔍</SearchIcon>
      <SearchInput
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={handleChange}
      />
      {value ? (
        <ClearButton type="button" onClick={onClear} aria-label="Clear search input">
          ×
        </ClearButton>
      ) : null}
    </SearchWrapper>
  )
}

export default SearchBar
