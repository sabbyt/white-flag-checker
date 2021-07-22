import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Layout from '../components/layout'


function Home({ data }) {
  const [userDetails, setUserDetails] = useState(null)

  const loginUser = async event => {
    event.preventDefault()

    // Do validation of ID or IC number here
    if (event.target.idNumber.length === 0) return alert('Please enter an ID number')

    // Validated
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
    console.log('RESULT', result)
    setUserDetails(result)
  }

  return userDetails ? (
    <Layout>
      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Profile</h2>
        </div>

        <div className='flex flex-col items-stretch  mt-8 justify-items-center'>
          <h2>NRIC: {userDetails.userID}</h2>
          <br />
          <QRCode value={userDetails._id} />
          <br />
          <p>Kindly show the QR code to the foodbank</p>
        </div>

      </div>
    </Layout>
  ) : (
    <Layout>
      <div className='bg-white m-6 shadow p-8 rounded mt-10 flex flex-col items-strech'>
        <form class="flex gap-2 items-center" onSubmit={loginUser}>
          <div class="flex gap-2 items-center">
            <label class="font-bold" htmlFor='idNumber'>ID Number</label>
            <input class="focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent font-extralight rounded shadow p-1 border-gray-200 border" id='idNumber' name='idNumber' type='text' autoComplete='name' required />
          </div>
          <button class="rounded shadow bg-white border-2 border-purple-300 py-1 px-2 hover:bg-gray-100" type='submit'>Login</button>
        </form>
      </div>
    </Layout>
  )
}
export default Home
