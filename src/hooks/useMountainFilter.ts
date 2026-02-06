import type { SupportedLocale } from '@/i18n/index'
import type { MountainsData } from '@/types/mountains'
import { useEffect, useMemo, useState } from 'react'

export type SortType = 'no' | 'elevation-asc' | 'elevation-desc' | 'kana'

const normalizeText = (value: string): string => {
  return value.trim().toLowerCase()
}

const compareByKana = (a: MountainsData, b: MountainsData, locale: SupportedLocale): number => {
  const left = locale === 'en' ? a.nameEn : a.kanaName
  const right = locale === 'en' ? b.nameEn : b.kanaName

  return left.localeCompare(right, locale)
}

export const useMountainFilter = (mountains: MountainsData[], locale: SupportedLocale) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [sortType, setSortType] = useState<SortType>('no')

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [searchQuery])

  const filteredMountains = useMemo(() => {
    const query = normalizeText(debouncedSearchQuery)
    const filtered =
      query.length === 0
        ? mountains
        : mountains.filter((mountain) => {
            const candidates = [mountain.name, mountain.nameEn, mountain.kanaName]

            return candidates.some((candidate) => normalizeText(candidate).includes(query))
          })

    const sorted = [...filtered]
    if (sortType === 'elevation-asc') {
      sorted.sort((a, b) => a.elevation - b.elevation)
    } else if (sortType === 'elevation-desc') {
      sorted.sort((a, b) => b.elevation - a.elevation)
    } else if (sortType === 'kana') {
      sorted.sort((a, b) => compareByKana(a, b, locale))
    } else {
      sorted.sort((a, b) => a.no - b.no)
    }

    return sorted
  }, [debouncedSearchQuery, locale, mountains, sortType])

  return {
    filteredMountains,
    searchQuery,
    setSearchQuery,
    sortType,
    setSortType,
    resultCount: filteredMountains.length,
  }
}
