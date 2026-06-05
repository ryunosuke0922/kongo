import Card from '@/components/molecules/card'
import type { UnifiedMountainData } from '@/types/mountains'

type Props = {
  mountains: UnifiedMountainData[]
  showListLabel?: boolean
}

const MountainCardList = ({ mountains, showListLabel = true }: Props) => {
  return (
    <>
      {mountains.map((mountain) => (
        <div key={mountain.slug}>
          <Card data={mountain} showListLabel={showListLabel}></Card>
        </div>
      ))}
    </>
  )
}

export default MountainCardList
