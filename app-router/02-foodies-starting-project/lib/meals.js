import fs from 'node:fs'
import Database from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

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

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferImage), (error) => {
    if(error){
      throw new Error('Saving image failed!')
    }
  })

  // Don't need public/images because public is by default
  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
     (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal)
}
