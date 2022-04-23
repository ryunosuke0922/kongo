import Card from '@/components/card'
import Layout from '@/layouts/full'
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
    font-size: 4.8rem;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    text-align: center;
  `
  const Description = styled.p`
    font-size: 2rem;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    text-align: center;
  `

  const hoge = (no: number) => (
    <div>
      <p>{no}</p>
    </div>
  )

  return (
    <Layout>
      <Title>日本の百名山</Title>
      {hoge(2)}
      <div>
        <Description>
          『日本の百名山』<br></br>
          (初刊一九六四年七月 新潮社)は、<br></br>
          深田久弥が執筆した山岳随筆集です。<br></br>
          こちらの著書を参考に日本の百名山を<br></br>
          一覧にまとめました。
        </Description>
      </div>

      <div className="main__images">
        <img src="images/img01.jpg" alt="" />
        <img src="images/img01.jpg" alt="" />
      </div>
      {get100FamousMountainsInJapan().map((e) => (
        <div key={e.no}>
          <Card data={e}></Card>
        </div>
      ))}
    </Layout>
  )
}

export default Home
