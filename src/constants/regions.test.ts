import { describe, expect, it } from 'vitest'
import { REGIONS } from './regions'

describe('hyakumeizan regions', () => {
  it('covers all 100 mountains, with no repeated entries within a region', () => {
    const numbers = new Set(REGIONS.flatMap((region) => region.mountainNumbers))
    expect(Array.from(numbers).sort((a, b) => a - b)).toEqual(
      Array.from({ length: 100 }, (_, index) => index + 1),
    )
    for (const { mountainNumbers } of REGIONS) {
      expect(new Set(mountainNumbers).size).toBe(mountainNumbers.length)
    }
  })

  it('lists mountains on regional boundaries in both regions', () => {
    const regionsFor = (no: number) =>
      REGIONS.filter((region) => region.mountainNumbers.includes(no)).map((region) => region.slug)
    expect(regionsFor(17)).toEqual(['tohoku', 'chubu'])
    expect(regionsFor(72)).toEqual(['kanto', 'chubu'])
    expect(regionsFor(89)).toEqual(['chubu', 'kansai'])
  })
})
