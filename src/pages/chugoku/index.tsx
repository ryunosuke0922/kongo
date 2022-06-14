import Layout from '@/layouts/full'
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
      <Title>中国地方</Title>
    </Layout>
  )
}

export default Home
