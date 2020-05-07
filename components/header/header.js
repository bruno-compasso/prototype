import styles from './header.module.css'
import Button from '../button/button'

export default function Header() {
  return (
    <div id={styles.header} className={styles.mainDiv}>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <h1>
              <b>Bruno Pereira</b>
            </h1>
          </div>
          <div className={styles.content}>
            <p><b>Desenvolvedor Web</b><br className={styles.hideOnDesktop} /><span className={styles.hideOnMobile}> em </span>Mogi Mirim, SP</p>
          </div>
          <section className={styles.btn}>
            <Button name="Contato" link="/contato" />
          </section>
        </div>
      </div>
  )
}