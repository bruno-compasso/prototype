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
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/contact/contact" as="/contact"><a>Contato</a></Link></li>
            <li><Link href="./tutorials/all">Tutorials</Link></li>
          </ul>
          <i onClick={navToggle} className={`${styles.navMenuIcon} fas fa-bars`}></i>
        </div>
      </nav>
      <FullScreenMenu navToggle={navToggle} navShow={navStatus} />
    </div>
  )

}