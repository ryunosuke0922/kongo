import Link from 'next/link'
import styled from 'styled-components'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { useLocale } from '@/i18n/index'
import {
  getLocalizedMountainName,
  getLocalizedMountainSystem,
  getLocalizedPrefectures,
} from '@/i18n/mountains'
import { formatElevation } from '@/i18n/summits'
import type { UnifiedMountainData } from '@/types/mountains'
import { toLocalizedPath } from '@/utils/seoPaths'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${UI_COLORS.textPrimary};
  font-size: medium;
  overflow-wrap: anywhere;
  th,
  td {
    text-align: start;
    padding: ${UI_SPACE.sm};
    border-bottom: 1px solid ${UI_COLORS.borderSoft};
  }
  caption {
    text-align: start;
    padding-block: ${UI_SPACE.md};
  }
  a {
    display: inline-block;
    padding-block: ${UI_SPACE.sm};
    text-decoration: underline;
  }
`

export default function MountainSummary({
  mountains,
  showSystem = false,
}: {
  mountains: UnifiedMountainData[]
  showSystem?: boolean
}) {
  const { t, locale } = useLocale()

  return (
    <Table>
      <caption>{t.REGION_COMPARISON}</caption>
      <thead>
        <tr>
          <th scope="col">{t.MOUNTAIN_NAME}</th>
          <th scope="col">{showSystem ? t.DETAIL_SYSTEM : t.DETAIL_PREFECTURE}</th>
          <th scope="col">{t.DETAIL_ELEVATION}</th>
        </tr>
      </thead>
      <tbody>
        {mountains.map((mountain) => (
          <tr key={mountain.slug}>
            <th scope="row">
              <Link href={toLocalizedPath(`/mountains/${mountain.slug}`, locale)}>
                {getLocalizedMountainName(mountain, locale)}
              </Link>
            </th>
            <td>
              {showSystem
                ? getLocalizedMountainSystem(mountain, locale)
                : getLocalizedPrefectures(mountain, locale)}
            </td>
            <td>{formatElevation(mountain.elevation, locale)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
