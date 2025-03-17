// using props
import styles from './Post.module.css'

function Post(props) {
  const { author, body } = props

  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
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
