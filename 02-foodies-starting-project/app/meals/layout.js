import styles from './layout.module.css'

export default function MealsLayout({ children }) {
  return (
    <>
      <h2 className={styles["meal-title"]}>You are a foodie</h2>
      {children}
    </>
  )
}
