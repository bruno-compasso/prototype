import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Tutorials from '../components/tutorials'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className={utilStyles.headingMd}>Welcome to my platform!</section>
      <Link href="/publisher">--> Publisher</Link>
      <Tutorials />
    </Layout>
  )
}