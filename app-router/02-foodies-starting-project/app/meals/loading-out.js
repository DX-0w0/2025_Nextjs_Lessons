// loading is not being used as intented needs to be named loading.js
// We are using the react Suspense component instead

import styles from './loading.module.css'

export default function MealsLoadingPage() {
  return (
    <>
      <p className={styles.loading}>Fetching meals...</p>
    </>
  )
}
