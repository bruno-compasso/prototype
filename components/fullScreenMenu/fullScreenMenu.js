import Link from 'next/link'
import styles from './FullScreenMenu.module.css'

class FullScreenMenu extends React.Component {
  render() {

    if (this.props.navShow) {
      return (
        <div>
          <nav class={`${styles.navMenu} ${styles.navMenuOff}`}>
            <div>
              <ul>
                <li><Link onClick={() => (this.props.navToggle())} href="/">Home</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </div>
          </nav>
          <i onClick={() => (this.props.navToggle())} className={`${styles.navMenuIcon} fas fa-times`}></i>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default FullScreenMenu