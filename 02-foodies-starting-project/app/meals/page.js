import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import MealsLoadingPage from './loading-out'

async function Meals() {
  const meals = await getMeals() // From our created database

  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe. Cook it yourself. Its super easy.</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share your recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
