import NewPost from './NewPost'
import Post from './Post'
import styles from './PostsList.module.css'
import { useState } from 'react'
import Modal from './Modal'

const initialPosts = [
  { author: 'David', body: 'He is a writer' },
  { author: 'Marie', body: 'She is dancer' },
]

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([...initialPosts])

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map((post, ind) => (
          <Post key={ind} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  )
}

export default PostsList
