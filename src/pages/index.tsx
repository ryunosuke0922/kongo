import Card from '@/components/card'
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'
import styled from 'styled-components'
const Home: NextPage = () => {
  // no: 1,
  // name: "利尻岳",
  // kanaName: "りしりだけ",
  // elevation: 1721,
  // mountainSystem: "利尻島",
  // prefectures: "北海道",
  // remarks: "",

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `

  return (
    <Wrapper>
      <div className="main">
        <Title>日本の百名山</Title>
        <div className="main__description">
          <p>
            『日本の百名山』<br></br>
            (初刊一九六四年七月 新潮社)は、<br></br>
            深田久弥が執筆した山岳随筆集です。<br></br>
            こちらの著書を参考に日本の百名山を<br></br>
            一覧にまとめました。
          </p>
        </div>
      </div>
      {get100FamousMountainsInJapan().map((e) => (
        <div key={e.no}>
          <Card data={e}></Card>
        </div>
      ))}
    </Wrapper>
  )
}
export default Home
