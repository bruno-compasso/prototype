import styles from './card.module.css'
import Link from 'next/link'

export default function Card(props) {
  return (
    <Link href={props.link} as={props.as || props.link}>
      <div className={styles.container}>
        <span className={styles.title}>{props.name}</span>
      </div>
    </Link>
  )
}