import Link from 'next/link'
import styles from './button.module.css'

function Button(props) {
  const { children, link, onClick } = props

  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
