import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost() {
  const [bodyText, setBodyText] = useState('')
  let debounceTimer

  function changeBodyHandler(event) {
    clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
      setBodyText(event.target.value)
    }, 1000)
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{bodyText}</p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required />
      </p>
    </form>
  )
}

export default NewPost
