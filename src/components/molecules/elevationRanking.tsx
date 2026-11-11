import { PageLead, sectionTitleText } from '@/components/molecules/sharedSurfaces/style'
import { UI_COLORS, UI_SPACE } from '@/constants/ui'
import { useLocale } from '@/i18n/index'
import { getLocalizedMountainName } from '@/i18n/mountains'
import { formatElevation, getSummitName, GSI_ELEVATIONS_URL } from '@/i18n/summits'
import type { UnifiedMountainData } from '@/types/mountains'
import Link from 'next/link'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${UI_COLORS.textPrimary};
  font-size: medium;

  caption {
    ${sectionTitleText}
    text-align: start;
  }

  th,
  td {
    text-align: start;
    padding: ${UI_SPACE.sm};
    border-bottom: 1px solid ${UI_COLORS.borderSoft};
  }

  td:last-child {
    white-space: nowrap;
  }

  a {
    display: inline-block;
    padding-block: ${UI_SPACE.sm};
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
`

export default function ElevationRanking({ peaks }: { peaks: UnifiedMountainData[] }) {
  const { t, locale } = useLocale()

  return (
    <>
      <Table>
        <caption>{t.HIGHEST_TABLE}</caption>
        <thead>
          <tr>
            <th scope="col">{t.RANK_LABEL}</th>
            <th scope="col">{t.MOUNTAIN_NAME}</th>
            <th scope="col">{t.DETAIL_ELEVATION}</th>
          </tr>
        </thead>
        <tbody>
          {peaks.map((peak) => (
            <tr key={peak.slug}>
              <td>{peaks.findIndex((other) => other.elevation === peak.elevation) + 1}</td>
              <th scope="row">
                <Link href={`/mountains/${peak.slug}`}>
                  {peak.slug === 'hotakadake'
                    ? getSummitName(peak.slug, locale)
                    : getLocalizedMountainName(peak, locale)}
                </Link>
              </th>
              <td>{formatElevation(peak.elevation, locale)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PageLead>
        <a href={GSI_ELEVATIONS_URL}>{t.ELEVATION_SOURCE}</a>
      </PageLead>
    </>
  )
}
