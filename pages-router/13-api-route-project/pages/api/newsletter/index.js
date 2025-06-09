import { connectDatabase, insertDocument } from '../../../helpers/db-util'

async function handler(req, res) {
  let client

  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to db failed' })
    return
  }

  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail })
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed' })
      return
    }

    res.status(201).json({ message: 'Signed Up!!' })
  }

  client.close()
}

export default handler
