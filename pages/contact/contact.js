import styles from './contact.module.css'
import Layout from '../../components/layout/layout'

const IMG1 = 'https://i.imgur.com/R6JB6SK.jpg'

export default function Contact() {
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