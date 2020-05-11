import styles from './header.module.css'

export default function Header() {
  return (
    <div id={styles.header} className={styles.mainDiv} style={{
      background: 'url("/header-background.jpg")',
      height: '100vh',
      display: 'grid',
      padding: '0 100px',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      alignContent: 'center',
      textAlign: 'center'
    }}>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <h1>
              <b>Bruno Pereira</b>
            </h1>
          </div>
          <div className={styles.content}>
            <p>Hi, my name is Bruno, and i'm a Web developer in São Paulo, Brazil. I used to build WordPress websites for an agency. Currently working full-time as a software engineer for one of the biggest tech companies in latin america.</p>
          </div>
        </div>
      </div>
  )
}