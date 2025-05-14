import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function LastSales(props) {
  const [sales, setSales] = useState(props.sales)

  const { data, error } = useSWR(
    'https://dummy-server-fc323-default-rtdb.firebaseio.com/sales.json',
    fetcher
  )

  useEffect(() => {
    if (data) {
      const transformedSales = []

      for (const [key, value] of Object.entries(data)) {
        transformedSales.push({ id: key, ...value })
      }

      setSales(transformedSales)
    }
  }, [data])

  if (error) {
    return <p>Failed to load.</p>
  }

  if (!data && !sales) {
    return <p>Loading....</p>
  }

  return (
    <>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://dummy-server-fc323-default-rtdb.firebaseio.com/sales.json'
  )
  const result = await response.json()
  const transformedSales = []

  for (const [key, value] of Object.entries(result)) {
    transformedSales.push({ id: key, ...value })
  }

  return {
    props: {
      sales: transformedSales,
      //   revalidate: 10,
    },
  }
}

export default LastSales
