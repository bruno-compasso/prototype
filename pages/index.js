import Head from 'next/head'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'

export default function Tutorials() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content="Bruno Pereira | Web developer | Tutorials" />
        <meta name="description" content="Web developer in SP, Brazil. Feel free to check out my tutorials in React, ES6+, GraphQL, and more." />
        <title>Homepage</title>
      </Head>
      <div>
        <Header />
      </div>
    </Layout>
  )
}