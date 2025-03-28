import Database from 'better-sqlite3'

const db = new Database('meals.db')

// Could database could be either async or sync 

// export function getMeals() {
//   return db.prepare('SELECT * FROM meals').all()
// }

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error('Loading meals failed')
  return db.prepare('SELECT * FROM meals').all()
}

export  function getMeal(slug){
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}