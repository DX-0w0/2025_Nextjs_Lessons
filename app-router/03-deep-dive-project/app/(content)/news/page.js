// Method - Fetching directly from database or source
import NewsList from '@/components/news-lists'
import { getAllNews } from '@/lib/news'

export default async function NewsPage() {
  const news = await getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}

// Method - Fetching on the serve-side
// import NewsList from '@/components/news-lists'

// export default async function NewsPage() {
//   const response = await fetch('http://localhost:8080/news')

//   if (!response.ok) {
//     throw new Error('Failed to fetch news.')
//   }

//   const news = await response.json()

//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={news} />
//     </>
//   )
// }

// Method - Fetching on client-side
// 'use client'

// // import { DUMMY_NEWS } from '@/dummy-news'
// import NewsList from '@/components/news-lists'
// import { useEffect, useState } from 'react'

// export default function NewsPage() {
//   const [error, setError] = useState()
//   const [isLoading, setIsLoading] = useState(false)
//   const [news, setNews] = useState()

//   useEffect(() => {
//     async function fetchNews() {
//       const response = await fetch('http://localhost:8080/news')

//       if (!response.ok) {
//         setError('Failed to fetch news.')
//         setIsLoading(false)
//       }

//       const news = await response.json()
//       setIsLoading(false)
//       setNews(news)
//     }

//     fetchNews()
//   }, [])

//   if (isLoading) {
//     return <p>Loading....</p>
//   }

//   if (error) {
//     return <p>{error}</p>
//   }

//   let newsContent

//   if (news) {
//     newsContent = <NewsList news={news} />
//   }

//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   )
// }
