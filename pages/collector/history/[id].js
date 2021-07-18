import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { reverse } from 'lodash'

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
    props: {
      ...data,
      userID: context.query.id
    }
  }
}

const HistoryPage = (props) => {
  // Getting browser location for future reference
  const [loading, setLoading] = useState(false)
  const [coords, setCoords] = useState({})
  const [collected, setCollected] = useState(false)
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setCoords({lat: position.coords.latitude, lng: position.coords.longitude})
      });  
    }
  }, []);


  const postCollection = async (userID) => {
    event.preventDefault()
    setLoading(true)
    // Validated
    const res = await fetch(
      '/api/foodbankCollected',
      {
        body: JSON.stringify({
          userID,
          coords: {
            lat: coords.lat || '',
            lng: coords.lng || ''
          }
          // TODO: POST MERCHANT ID
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    if (result.error) {
      // Allow button to click again
      setLoading(false)
    } else {
      // Go to success page
      setLoading(false)
      setCollected(true)
    }
  }

  if (collected) {
    return (
      <Layout>
        <Head>
          <title>Collection Success</title>
        </Head>
        <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
          <div className='flex-1'>
            <h2 className='text-gray-700 font-semibold'>Collection Success!</h2>
          </div>

          <div>
            <Link href='/foodbank/scan'>
              <a>Scan again</a>
            </Link>
          </div>    
        </div>
      </Layout>
    )
  }


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
          reverse(props.history.map((post) => <li>{post.time}</li>))
          : null
        }
        </ul>
      </div>

      <button onClick={() => !loading ? postCollection(props.userID) : null} >
        <p>{"Collected"}</p>
      </button>

    </div>
  </Layout>
)}

export default HistoryPage
