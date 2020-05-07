import styles from './button.module.css'

export default function Button(props) {
  return (
    <a className={styles.btn} href={props.link}>{props.name}</a>
  )
}