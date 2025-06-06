import { useRef, useState } from 'react'

function HomePage() {
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()
  const [feedbackItems, setFeedbackItems] = useState([])

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

    //{email: 'some email', text: 'some text' }
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>You email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>You feedback</label>
          <textarea
            type='feedback'
            id='feedback'
            rows='5'
            ref={feedbackInputRef}
          />
        </div>
        <button>Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
