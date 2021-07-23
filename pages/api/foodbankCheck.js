import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.post(async (req, res) => {
  const foodbankID = req.body.id
  const merchant = await req.db.collection('merchant').findOne({ id: foodbankID })
  // ID created
  if (merchant) {
    return res.json({ error: false, merchant })
  } else {
    return res.json({ error: true })
  }
})

export default handler
