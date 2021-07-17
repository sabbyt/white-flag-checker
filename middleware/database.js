import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const uri = 'mongodb+srv://sabbyt:abcd1234@cluster0.dp3x7.mongodb.net/whiteflag?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function database (req, res, next) {
  await client.connect()
  console.log('Connected to DB')
  req.dbClient = client
  req.db = client.db('whiteflag')
  return next()
}

const middleware = nextConnect()
middleware.use(database)

export default middleware
