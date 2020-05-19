import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Card from '../../components/card/card'

export default function Publisher() {

  return (
    <Layout>
      <Head>
        <title>React</title>
      </Head>
      <div className="cardContainer">
        <Card link="/tutorials/react/react-basics" name="React basics" />
        <Card link="/tutorials/react/intermediate-react" name="Intermediate React" />
      </div>
    </Layout>
  )
}