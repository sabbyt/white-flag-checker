import nextConnect from 'next-connect'
import moment from 'moment'
import { ObjectId } from 'mongodb'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.post(async (req, res) => {
  const userID = req.body.userID
  const coords = req.body.coords
  const merchantID = req.body.merchantID
  const currentTimestamp = moment().format('YYYY-MM-DD HH:mm')
  const newCollectionObj = {
    lat: coords.lat,
    lng: coords.lng,
    time: currentTimestamp,
    merchantID
  }

  const result = await req.db.collection('users').update(
    { _id: ObjectId(userID) },
    { $push: { history: newCollectionObj } }
  )

  if (result.acknowledged) {
    return res.json({ error: false })
  } else {
    return res.json({ error: true })
  }
})

export default handler
