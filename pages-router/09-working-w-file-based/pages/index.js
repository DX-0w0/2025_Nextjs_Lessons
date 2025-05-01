import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/events'>Events</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
