import NewPost from './NewPost'
import Post from './Post'
import styles from './PostsList.module.css'
import { useEffect, useState } from 'react'
import Modal from './Modal'

// const initialPosts = [
//   { author: 'David', body: 'He is a writer' },
//   { author: 'Marie', body: 'She is dancer' },
// ]

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const data = await response.json()
      setPosts(data.posts)
      setIsFetching(false)
    }

    fetchPosts()
  }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    setPosts((prevPosts) => [postData, ...prevPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && (
        <ul className={styles.posts}>
          {posts.map((post, ind) => (
            <Post key={ind} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}

export default PostsList
