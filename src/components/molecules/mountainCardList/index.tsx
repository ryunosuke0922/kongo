import Card from '@/components/molecules/card'
import type { MountainsData } from '@/types/mountains'

type Props = {
  mountains: MountainsData[]
}

const MountainCardList = ({ mountains }: Props) => {
  return (
    <>
      {mountains.map((mountain) => (
        <div key={mountain.no}>
          <Card data={mountain}></Card>
        </div>
      ))}
    </>
  )
}

export default MountainCardList
