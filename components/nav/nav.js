import React from 'react';
import styles from './nav.module.css'
import Link from 'next/link'
import FullScreenMenu from '../fullScreenMenu/fullScreenMenu'

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      navStatus: false
    }

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle = () => {
    this.setState({
      navStatus: !this.state.navStatus,
    });
  }

  render() {
    return (
      <div>
        <nav className="app-nav">
          <div className={styles.navWrapper}>
            <ul id={styles.navDesktop} className={styles.navMenu}>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/contato"><a>Contato</a></Link></li>
            </ul>
            <i onClick={this.navToggle} className={`${styles.navMenuIcon} fas fa-bars`}></i>
          </div>
        </nav>
        <FullScreenMenu navToggle={this.navToggle} navShow={this.state.navStatus} />
      </div>
    )
  }
}

export default Nav