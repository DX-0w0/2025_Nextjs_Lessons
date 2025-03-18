import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost(props) {
  const { onCancel, onAddPost } = props

  const [bodyText, setBodyText] = useState('')
  const [authorText, setAuthorText] = useState('')

  function bodyChangeHandler(event) {
    setBodyText(event.target.value)
  }

  function authorChangeHandler(event) {
    setAuthorText(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      body: bodyText,
      author: authorText,
    }
    onAddPost(postData)
    onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  )
}

export default NewPost
