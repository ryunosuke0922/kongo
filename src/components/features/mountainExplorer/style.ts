import { UI_COLORS } from '@/constants/ui'
import styled from 'styled-components'

export const SearchGuide = styled.section`
  width: 100%;
  display: grid;
  gap: 1em;
  font-size: medium;

  nav {
    margin: 0;
  }
`

export const SearchGuideTitle = styled.h2`
  line-height: 1.4;
  margin: 0;
  font-size: 1.5em;
`

export const SearchGuideText = styled.p`
  color: ${UI_COLORS.textSecondary};
  line-height: 1.6;
  margin: 0;
  font-size: 1em;
`

export const FilterControls = styled.div`
  --text-body-size: medium;
  --text-label-size: small;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 11em), 1fr));
  align-items: end;
  gap: 1em;
  padding-block: 1em;
  border-block: 1px solid ${UI_COLORS.borderSoft};
  font-size: var(--text-body-size);

  &:lang(en) {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 12.5em), 1fr));
  }

  .astryx-field {
    gap: 0.5em;
    min-width: 0;
  }

  .mountain-search-input,
  select {
    width: 100%;
    height: auto;
    min-height: max(46px, 2.875em);
    padding: 0.5em 0.75em;
    border: 1px solid var(--color-border-emphasized);
    border-radius: var(--radius-element);
    background: var(--color-background-surface);
    color: var(--color-text-primary);
    font-size: var(--text-body-size);
  }

  .mountain-select-control {
    position: relative;
  }

  select {
    appearance: none;
    padding-block: 0.625em;
    padding-inline: 1em 2.25em;
  }

  .mountain-select-control .astryx-icon {
    position: absolute;
    inset-inline-end: 1em;
    top: 50%;
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
    font-size: var(--text-body-size);
    pointer-events: none;
  }

  /* The site's root rem follows viewport width; size search icons with the field text. */
  .mountain-search-input {
    gap: 0.5em;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .mountain-search-input .astryx-icon {
    width: 1em;
    height: 1em;
    font-size: var(--text-body-size);
  }

  .mountain-search-input button {
    min-width: 44px;
    min-height: 44px;
  }

  .mountain-search-input:focus-within,
  select:focus-visible {
    outline: 2px solid ${UI_COLORS.focus};
    outline-offset: 2px;
  }

  input[type='search'] {
    font: inherit;

    &::-webkit-search-cancel-button {
      appearance: none;
    }
  }
`

export const ResultSummary = styled.p`
  font-size: medium;
  margin: 0;
  color: ${UI_COLORS.textSecondary};
`

export const StatsSummary = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 9em), 1fr));
  gap: 1em;
  margin: 0 0 1em;
  overflow-wrap: anywhere;

  dt {
    font-size: 0.875em;
    color: ${UI_COLORS.textSecondary};
  }

  dd {
    margin: 0;
    font-size: 1.5em;
    font-variant-numeric: tabular-nums;
  }

  dd span {
    display: block;
    font-size: medium;
    color: ${UI_COLORS.textSecondary};
  }
`

export const EmptyText = styled.p`
  width: 100%;
  font-size: medium;
  color: ${UI_COLORS.textSecondary};
  line-height: 1.7;
`
