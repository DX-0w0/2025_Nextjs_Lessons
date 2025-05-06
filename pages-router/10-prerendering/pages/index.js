import fs from 'fs/promises'
import path from 'path'

function HomePage(props) {
  const { products } = props

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

// This function is special named function. Always return a props key. This props will be send to above
// Server-side
export async function getStaticProps() {
  console.log('REGENERATE...')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}

export default HomePage
