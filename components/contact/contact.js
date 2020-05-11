import styles from './contact.module.css'
import Layout from '../layout/layout'
import Head from 'next/head'

export default function ContactComponent() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.section}>
        <div className={styles.contactInfo}>
          <p>Contact</p>
          <p>+55 (19) 97115 9735</p>
          <p>bruno.webjr@gmail.com</p>
          <p>São Paulo, Brazil</p>
        </div>
      </div>
    </Layout>
  )
}