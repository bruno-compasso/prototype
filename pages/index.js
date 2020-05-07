import Head from 'next/head'
import Layout from '../components/layout/layout'
import Card from '../components/card/card'
import Nav from '../components/nav/nav'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Tutorials() {
  return (
    <Layout home>
      <Head>
        <title>Homepage</title>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Header />
        <Footer />
      </div>

      <div className="cardContainer">
        <Card link="/topics/react" name="React" />
        <Card link="/topics/javascriptesplus" name="JavaScript ES+" />
        <Card link="/topics/angular" name="Angular" />
        <Card link="/topics/graphql" name="GraphQL" />
      </div>
    </Layout>
  )
}