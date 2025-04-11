import { DUMMY_NEWS } from '@/dummy-news'
import sql from 'better-sqlite3'

// Fetching data directly from database
const db = sql('data.db') //Path relative to root

// Can be async or sync function
export async function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all()
  await new Promise((resolve) => setTimeout(resolve, 2000)) // Stimulate a slow database
  return news
  // return DUMMY_NEWS
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3)
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear()
    if (!years.includes(year)) {
      years.push(year)
    }
    return years
  }, []).sort((a, b) => b - a)
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear()
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth()
      if (!months.includes(month)) {
        months.push(month + 1)
      }
    }
    return months
  }, []).sort((a, b) => b - a)
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  )
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear()
    const newsMonth = new Date(news.date).getMonth() + 1
    return newsYear === +year && newsMonth === +month
  })
}
