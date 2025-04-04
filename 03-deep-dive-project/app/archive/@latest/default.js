import NewsList from '@/components/news-lists'
import { getLatestNews } from '@/lib/news'

export default function LatestNewsPage() {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}
