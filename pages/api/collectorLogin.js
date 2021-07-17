import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.post(async (req, res) => {
  const userID = req.body.userID
  const user = await req.db.collection('users').findOne({ userID })
  // ID created
  if (user) {
    return res.json(user)
  }

  // ID not yet created
  const newUserObj = {
    userID
  }
  const newUser = await req.db.collection('users').insertOne({
    history: [],
    ...newUserObj
  })
  if (newUser) {
    const obj = {
      userID,
      _id: newUser.insertedId
    }
    return res.json(obj)
  } else {
    return res.json({ error: true })
  }
})

export default handler
