'use client'

export default function FilterError({ error }) {
  return (
    <div id='error'>
      <h2>An Error Occured</h2>
      <p>Error: {error.message}</p>
    </div>
  )
}
