import classes from './NewPost.module.css'
import Modal from '../components/Modal'
import { Link, Form, redirect } from 'react-router-dom'

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='author' required />
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>
            Cancel
          </Link>
          <button >Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewPost

export async function action(data) {
  console.log('ad', data)
  const { request } = data
  const formData = await request.formData()
  const postData = Object.fromEntries(formData) // Get back { body: '...', author: '...'}

  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  return redirect('/')
}
