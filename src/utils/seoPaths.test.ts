import { SITE_URL } from '@/constants/site'
import { describe, expect, it } from 'vitest'
import { toAbsoluteUrl, toBaseLocalePath, toLocalizedPath, withTrailingSlash } from './seoPaths'

describe('withTrailingSlash', () => {
  it('keeps the root path unchanged', () => {
    expect(withTrailingSlash('/')).toBe('/')
  })

  it('adds a trailing slash to non-root paths', () => {
    expect(withTrailingSlash('/local/chubu')).toBe('/local/chubu/')
  })

  it('does not duplicate an existing trailing slash', () => {
    expect(withTrailingSlash('/local/chubu/')).toBe('/local/chubu/')
  })
})

describe('toLocalizedPath', () => {
  it('keeps Japanese paths unprefixed', () => {
    expect(toLocalizedPath('/mountains/fuji', 'ja')).toBe('/mountains/fuji/')
  })

  it('prefixes non-Japanese paths with the locale', () => {
    expect(toLocalizedPath('/mountains/fuji', 'en')).toBe('/en/mountains/fuji/')
  })

  it('uses the locale root for non-Japanese top pages', () => {
    expect(toLocalizedPath('/', 'zh-TW')).toBe('/zh-TW/')
  })
})

describe('toAbsoluteUrl', () => {
  it('keeps absolute URLs unchanged', () => {
    expect(toAbsoluteUrl('https://example.com/path')).toBe('https://example.com/path')
  })

  it('adds the site URL and trailing slash to page paths', () => {
    expect(toAbsoluteUrl('/en/local/chubu')).toBe(`${SITE_URL}/en/local/chubu/`)
  })

  it('does not add a trailing slash to asset paths', () => {
    expect(toAbsoluteUrl('/images/logo_hyaku.svg')).toBe(`${SITE_URL}/images/logo_hyaku.svg`)
  })

  it('preserves query strings without adding a trailing slash', () => {
    expect(toAbsoluteUrl('/en/?q=fuji')).toBe(`${SITE_URL}/en/?q=fuji`)
  })
})

describe('toBaseLocalePath', () => {
  it('removes supported locale prefixes', () => {
    expect(toBaseLocalePath('/en/local/chubu/')).toBe('/local/chubu/')
  })

  it('keeps Japanese base paths unchanged', () => {
    expect(toBaseLocalePath('/local/chubu')).toBe('/local/chubu/')
  })
})
