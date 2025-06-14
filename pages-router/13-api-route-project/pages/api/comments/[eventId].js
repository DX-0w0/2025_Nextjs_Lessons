import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from '../../../helpers/db-util'

export default async function handler(req, res) {
  const eventId = req.query.eventId

  let client

  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to db failed' })
    return
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' })
      client.close()
      return
    }

    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    }

    let result

    try {
      result = await insertDocument(client, 'comments', newComment)
      newComment._id = result.insertedId
      res.status(201).json({ message: 'Added comment', commit: newComment })
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed' })
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ messages: 'Getting comments failed' })
    }
  }

  client.close()
}
