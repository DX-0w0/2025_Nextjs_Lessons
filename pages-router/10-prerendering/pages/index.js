import fs from 'fs/promises'
import Link from 'next/link'
import path from 'path'

function HomePage(props) {
  const { products } = props

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link href='/user-profile'>User</Link>
        </li>
        <li>
          <Link href='/last-sales'>Sales</Link>
        </li>
        <li>
          <Link href='/last-sales2'>Sales2</Link>
        </li>
      </ul>
    </>
  )
}

// This function is special named function. Always return a props key. This props will be send to above
// Server-side
export async function getStaticProps(context) {
  console.log('REGENERATE...')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }

  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // notFound: false,
    // redirect: '/'
  }
}

export default HomePage
