import Head from 'next/head'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layoutFoodbank'

const ManualCollector = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const checkUser = async event => {
    event.preventDefault()
    if (loading) return

    if (event.target.idNumber.length === 0) return alert('Please enter an ID number')

    setLoading(true)
    const userID = event.target.idNumber.value

    const res = await fetch(
      '/api/collectorLogin',
      {
        body: JSON.stringify({
          userID
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()

    setLoading(false)

    router.push({
      pathname: '/collector/history/[id]',
      query: { id: result._id }
    })

    // router.push({
    //   pathname: '/foodbank/[id]',
    //   query: { id: result._id }
    // })
  }

  return (
    <Layout>

      <Head>
        <title>Manual Entry</title>
      </Head>

      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Manual Entry</h2>
        </div>

        <div className='flex flex-col items-stretch  mt-8 justify-items-center'>
          <form onSubmit={checkUser}>
            <label htmlFor='idNumber'>ID Number</label><br />
            <input id='idNumber' name='idNumber' type='text' autoComplete='name' className='inputField' placeholder='NRIC' required />
            <br />
            <button type='submit' className='approveButton'>
              <p className='text-black'>Check User</p>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ManualCollector
