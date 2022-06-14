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
      <Title>中部地方</Title>
      {get100FamousMountainsInJapan()
        .filter(
          (e) =>
            e.no === 17 ||
            e.no === 19 ||
            e.no === 25 ||
            e.no === 26 ||
            e.no === 27 ||
            e.no === 30 ||
            e.no === 31 ||
            e.no === 32 ||
            e.no === 33 ||
            e.no === 34 ||
            e.no === 35 ||
            e.no === 42 ||
            e.no === 43 ||
            e.no === 45 ||
            e.no === 46 ||
            e.no === 47 ||
            e.no === 48 ||
            e.no === 49 ||
            e.no === 50 ||
            e.no === 51 ||
            e.no === 52 ||
            e.no === 53 ||
            e.no === 54 ||
            e.no === 55 ||
            e.no === 56 ||
            e.no === 57 ||
            e.no === 58 ||
            e.no === 59 ||
            e.no === 60 ||
            e.no === 61 ||
            e.no === 62 ||
            e.no === 63 ||
            e.no === 64 ||
            e.no === 66 ||
            e.no === 67 ||
            e.no === 68 ||
            e.no === 69 ||
            e.no === 70 ||
            e.no === 72 ||
            e.no === 73 ||
            e.no === 74 ||
            e.no === 75 ||
            e.no === 76 ||
            e.no === 77 ||
            e.no === 78 ||
            e.no === 79 ||
            e.no === 80 ||
            e.no === 81 ||
            e.no === 82 ||
            e.no === 83 ||
            e.no === 84 ||
            e.no === 85 ||
            e.no === 86 ||
            e.no === 87 ||
            e.no === 88 ||
            e.no === 89 ||
            e.no === 1
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
