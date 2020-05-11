import Head from 'next/head'
import styles from './layout.module.css'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <header>
        <input type='checkbox' id='toggle' style={{ display: 'none' }} />
        <label style={{  display: 'none' }} className={`toggle-btn toggle-btn__cross ${styles.fullScreenMenuToggle}`} htmlFor='toggle'>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
        <nav className='navWrapper'>
          <ul id={styles.navDesktop} className={styles.navMenu}>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/contact"><li><a>Contact</a></li></Link>
            <Link href="/tutorials/all"><li><a>Tutorials</a></li></Link>
          </ul>
        </nav>
      </header>
      <main>
        <div className='wrap'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}