import Head from 'next/head'
import Layout from '../components/layout/layout'
import Card from '../components/card/card'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Homepage</title>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div className="cardContainer">
        <Card link="/topics/react" name="React" />
        <Card link="/topics/javascriptesplus" name="JavaScript ES+" />
        <Card link="/topics/angular" name="Angular" />
        <Card link="/topics/graphql" name="GraphQL" />
      </div>
      <style jsx>{`
      .cardContainer {
          display: inline-grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          grid-column-gap: 5px;
          min-height: 250px;
        }  
      `}</style>
    </Layout>
  )
}