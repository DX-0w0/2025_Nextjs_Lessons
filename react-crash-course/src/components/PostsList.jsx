import NewPost from './NewPost'
import Post from './Post'
import styles from './PostsList.module.css'

const posts = [
  { id: 1, author: 'David', body: 'He is always hungry' },
  { id: 2, author: 'Marie', body: 'She loves to read books' },
  { id: 3, author: 'John', body: 'He is a great cook' },
  { id: 4, author: 'Paul', body: 'He is a musician' },
  { id: 5, author: 'Ringo', body: 'He is a drummer' },
  { id: 6, author: 'George', body: 'He is a guitarist' },
]

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  )
}

export default PostsList
