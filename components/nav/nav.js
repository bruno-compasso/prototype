import React, { useState } from 'react';
import styles from './nav.module.css'
import Link from 'next/link'
import FullScreenMenu from '../fullScreenMenu/fullScreenMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {

  const [navStatus, setNavStatus] = useState(false);

  const navToggle = () => {
    setNavStatus(!navStatus)
  }

  return (
    <div>
      <nav className={styles.appNav}>
        <div className={styles.navWrapper}>
          <ul id={styles.navDesktop} className={styles.navMenu}>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/contact"><li><a>Contact</a></li></Link>
            <Link href="/tutorials/all"><li><a>Tutorials</a></li></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}