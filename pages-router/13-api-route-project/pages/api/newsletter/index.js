import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    const client = await MongoClient.connect(process.env.MONGODB)
    const db = client.db('newsletter')

    await db.collection('emails').insertOne({
      email: userEmail,
    })

    client.close()

    res.status(201).json({ message: 'Signed Up!!' })
  }
}

export default handler
