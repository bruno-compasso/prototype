import { Component } from 'react'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerOuter}>
        <div className={styles.footer}>
          <div className={styles.footerCol}>
            <div className={`${styles.contactRow} tal`}>
              <p className={styles.socialNetworks}>
                <a className="socialMediaLink" href="https://www.linkedin.com/in/sirbruno/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="faSocialMedia" icon={['fab', 'linkedin']} />
                </a>
              </p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>Contato</h4>
            <p>+55 (19) 97115 9735</p>
            <p>bruno.webjr@gmail.com</p>
            <p>São Paulo, Brazil</p>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          borderTop: 'thin solid #333',
          margin: '0 20px',
          padding: '10px',
          fontSize: '14px',
          color: '#fff'
        }}>
          <i>Work in progress</i>
        </div>
      </footer>
    )
  }
}

export default Footer;