import React, { useState } from 'react';
import styles from './nav.module.css'
import Link from 'next/link'
import FullScreenMenu from '../fullScreenMenu/fullScreenMenu'

export default function Nav() {

  const [navStatus, setNavStatus] = useState(false);

  const navToggle = () => {
    setNavStatus(!navStatus)
  }

  return (
    <div>
      <nav className="app-nav">
        <div className={styles.navWrapper}>
          <ul id={styles.navDesktop} className={styles.navMenu}>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/contact/contact" as="/contact"><li><a>Contato</a></li></Link>
            <Link href="/tutorials/all"><li><a>Tutorials</a></li></Link>
          </ul>
          <i onClick={navToggle} className={`${styles.navMenuIcon} fas fa-bars`}></i>
        </div>
      </nav>
      <FullScreenMenu navToggle={navToggle} navShow={navStatus} />
    </div>
  )

}