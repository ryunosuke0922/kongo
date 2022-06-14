import Card from '@/components/molecules/card'
import Layout from '@/layouts/local'
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
      <Title>北海道地方</Title>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 1 ||
            e.no === 2 ||
            e.no === 3 ||
            e.no === 4 ||
            e.no === 5 ||
            e.no === 6 ||
            e.no === 7 ||
            e.no === 8 ||
            e.no === 9
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
