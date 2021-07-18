import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../../../components/layoutFoodbank'
import { url } from '../../../config';

export async function getServerSideProps(context) {
  if (!context.query || !context.query.id.length === 0) return { error: true } 

  const res = await fetch(
    `${url}/api/collectorHistory`,
    {
      body: JSON.stringify({
        userID: context.query.id
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  )

  const data = await res.json()

  // Error
  if (!data) {
    return {
      error: true,
    }
  }

  return {
    props: data
  }
}

const HistoryPage = (props) => {
  return (
  <Layout>
    <Head>
      <title>Collection History</title>
    </Head>
    <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
      <div className='flex-1'>
        <h2 className='text-gray-700 font-semibold'>Collection History</h2>
      </div>

      <div className='flex flex-col items-stretch  mt-8 '>
        <ul>
        {
          props && props.history
          ?
          props.history.map((post) => <li>{post.time}</li>)
          : null
        }
        </ul>
      </div>

    </div>
  </Layout>
)}

export default HistoryPage
