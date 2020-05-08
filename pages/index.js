import Head from 'next/head'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Tutorials() {
  return (
    <Layout home>
      <Head>
        <meta name="description" content="Hi, my name is Bruno, and i'm a web developer in São Paulo, Brazil." />
        <title>Homepage</title>
      </Head>
      <div>
        <Header />
        <Footer />
      </div>
    </Layout>
  )
}