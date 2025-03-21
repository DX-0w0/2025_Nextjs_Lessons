// using props
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

function Post(props) {
  const { id, author, body } = props

  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  )
}

export default Post

/*
Hardcoding
const names = ['David', 'John', 'Paul', 'Ringo', 'George']

function Post() {
  const num = Math.floor(Math.random() * names.length)
  const chooseName = names[num]

  return (
    <div>
      <p>Post by {chooseName}</p>
    </div>
  )
}

export default Post
*/
