import Card from '@/components/molecules/card'
import Layout from '@/layouts/full'
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `
  return (
    <Layout>
      <Title>九州・沖縄地方</Title>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 95 || e.no === 96 || e.no === 97 || e.no === 98 || e.no === 99 || e.no === 100
        )
        .map((e) => (
          <div key={e.no}>
            <Card data={e}></Card>
          </div>
        ))}
    </Layout>
  )
}

export default Home
