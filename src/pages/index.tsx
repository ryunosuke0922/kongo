import { BREAKPOINTS } from '@/constants/breakpoints'
import { useMountainFilter, type SortType } from '@/hooks/useMountainFilter'
import { useLocale } from '@/i18n/index'
import Card from '@/components/molecules/card'
import SearchBar from '@/components/molecules/searchBar'
import SortSelect from '@/components/molecules/sortSelect'
import Layout from '@/components/layouts/top'
import type { MountainsData } from '@/types/mountains'
import type { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'

type Props = {
  mountains: MountainsData[]
}

const FilterControls = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    display: block;
  }
`

const FilterItem = styled.div`
  flex: 1;
  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    &:first-child {
      margin: 0 0 1.2rem;
    }
  }
`

const EmptyText = styled.p`
  width: 100%;
  font-size: 2rem;
  color: #555;

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.4rem;
  }
`

const Home: NextPage<Props> = ({ mountains }) => {
  const { t, locale } = useLocale()
  const { filteredMountains, searchQuery, setSearchQuery, sortType, setSortType, resultCount } =
    useMountainFilter(mountains, locale)

  const sortOptions: { value: SortType; label: string }[] = [
    { value: 'no', label: t.SORT_NO },
    { value: 'elevation-desc', label: t.SORT_ELEVATION_DESC },
    { value: 'elevation-asc', label: t.SORT_ELEVATION_ASC },
    { value: 'kana', label: t.SORT_KANA },
  ]
  const hasSearchQuery = searchQuery.trim().length > 0
  const resultText =
    locale === 'en'
      ? `${t.SEARCH_RESULT_LABEL}: ${resultCount} ${t.SEARCH_RESULT}`
      : `${t.SEARCH_RESULT_LABEL}: ${resultCount}${t.SEARCH_RESULT}`

  return (
    <Layout
      controls={
        <FilterControls>
          <FilterItem>
            <SearchBar
              value={searchQuery}
              placeholder={t.SEARCH_PLACEHOLDER}
              ariaLabel={t.SEARCH_PLACEHOLDER}
              clearAriaLabel={t.SEARCH_CLEAR_ARIA}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </FilterItem>
          <FilterItem>
            <SortSelect
              value={sortType}
              label={t.SORT_LABEL}
              options={sortOptions}
              onChange={setSortType}
            />
          </FilterItem>
        </FilterControls>
      }
      resultSummary={hasSearchQuery ? resultText : null}
    >
      {filteredMountains.length > 0 ? (
        filteredMountains.map((e) => (
          <div key={e.no}>
            <Card data={e}></Card>
          </div>
        ))
      ) : (
        <EmptyText>{t.NO_SEARCH_RESULTS}</EmptyText>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mountains: MountainsData[] = (await import('@/data/mountains.json')).default

  return {
    props: {
      mountains,
    },
  }
}

export default Home
