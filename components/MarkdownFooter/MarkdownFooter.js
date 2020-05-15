import Link from 'next/link'
import styles from './MarkdownFooter.module.css'

export default function markdownFooter(props) {
  return (
    <div className={ styles.main }>
      <span>
        <p>←</p>Previous lesson
        <Link href={ props.prevLink }>
          <a className={ styles.link }> { props.prevLesson } </a>
        </Link>
      </span>
      <span style={{ textAlign: 'right' }}>
        <p>→</p>Next lesson
        <Link href={ props.nextLink }>
          <a className={ styles.link }> { props.nextLesson } </a>
        </Link>
      </span>
    </div>
  )
}