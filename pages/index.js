import Head from 'next/head'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Tutorials() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content="Bruno Pereira | Web developer | Tutorials" />
        <meta name="description" content="Hi, my name is Bruno, and i'm a web developer in São Paulo, Brazil. Feel free to check out my tutorials in React, GraphQL, Node, JavaScript ES+, and more." />
        <title>Homepage</title>
      </Head>
        <div>
          <Header />
          <Footer />
        </div>
    </Layout>
  )
}