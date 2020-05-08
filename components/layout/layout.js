import Head from 'next/head'
import styles from './layout.module.css'
import Nav from '../nav/nav'
import Footer from '../footer/footer'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}