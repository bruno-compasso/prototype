import { Component } from 'react'
import Logo from '../../public/images/logo-bruno-pereira.svg'
import styles from './footer.module.css'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerOuter}>
        <div className={styles.footer}>
          <div className={styles.footerCol}>
            <Logo className="app-logo" />
            <div className={`${styles.contactRow} tal`}>
              <p className={styles.socialNetworks}>
                <a href="https://www.linkedin.com/in/sirbruno/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/bruno.webjr/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>Contato</h4>
            <p>Tel. (19) 97115 9735</p>
            <p>bruno.webjr@gmail.com</p>
            <p>Mogi Mirim, SP</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;