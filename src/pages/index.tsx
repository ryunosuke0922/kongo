import Card from '@/components/molecules/card'
import Layout from '@/layouts/top'
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'
import { Col, Row } from 'react-bootstrap'

const Home: NextPage = () => {
  // no: 1,
  // name: "利尻岳",
  // kanaName: "りしりだけ",
  // elevation: 1721,
  // mountainSystem: "利尻島",
  // prefectures: "北海道",
  // remarks: "",

  return (
    <Layout>
      <Row>
        {get100FamousMountainsInJapan().map((e) => (
          <Col xs={12} md={6} key={e.no}>
            <Card data={e}></Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Home
