import styles from './contact.module.css'
import Layout from '../layout/layout'

export default function ContactComponent() {
  return (
    <Layout>
      <div className={styles.section}>
        <div className={styles.contactInfo}>
          <p>CONTATO</p>
          <p>+55 (19) 97115 9735</p>
          <p>bruno.webjr@gmail.com</p>
          <p>São Paulo, Brazil</p>
        </div>
      </div>
    </Layout>
  )
}