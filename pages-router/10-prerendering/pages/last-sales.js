import { useEffect, useState } from 'react'

function LastSales() {
  const [sales, setSales] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      const response = await fetch(
        'https://dummy-server-fc323-default-rtdb.firebaseio.com/sales.json'
      )
      console.log(response)
      const result = await response.json()
      //   console.log(result)

      return result
    }

    async function loadData() {
      const data = await fetchData()
      const transformedSales = []

      for (const [key, value] of Object.entries(data)) {
        transformedSales.push({ id: key, ...value })
      }

      setSales(transformedSales)
      setIsLoading(false)
    }

    loadData()
  }, [])

  if (isLoading) {
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

export default LastSales
