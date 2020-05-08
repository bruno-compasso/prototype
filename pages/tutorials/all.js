import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Card from '../../components/card/card'

export default function Tutorials() {
  return (
    <Layout home>
      <Head>
        <title>Tutorials</title>
      </Head>
      <div className="cardContainer">
        <Card link="/topics/react" name="React" />
        <Card link="/topics/javascriptesplus" name="JavaScript ES+" />
        <Card link="/topics/angular" name="Angular" />
        <Card link="/topics/graphql" name="GraphQL" />
      </div>
    </Layout>
  )
}