import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { ObjectId } from 'mongodb'

const handler = nextConnect()

handler.use(middleware)

handler.post(async (req, res) => {
  const userID = req.body.userID
  const user = await req.db.collection('users').findOne({ _id: ObjectId(userID) })
  // ID created
  if (user) {
    return res.json({ history: user.history })
  } else {
    return res.json({ error: true })
  }
})

export default handler
