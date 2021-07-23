import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Cookies from 'js-cookie'

import Layout from '../components/layout'

function Home ({ data }) {
  const [userDetails, setUserDetails] = useState(null)

  const cookieUser = {
    userID: null,
    _id: null
  }

  cookieUser.userID = Cookies.get('userID')
  cookieUser._id = Cookies.get('qrString')

  if (!userDetails && cookieUser.userID && cookieUser._id) {
    setUserDetails(cookieUser)
  }

  const loginUser = async event => {
    event.preventDefault()

    // Do validation of ID or IC number here
    if (event.target.idNumber.length === 0) return alert('Please enter an ID number')

    // Validated
    const userID = event.target.idNumber.value.replace(/[^0-9a-z]/gi, '').toUpperCase()

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
    Cookies.set('userID', result.userID)
    Cookies.set('qrString', result._id)
    setUserDetails(result)
  }

  return userDetails ? (
    <Layout home>
      <div className='bg-white m-6 shadow-md p-8 rounded mt-10 flex flex-col items-strech'>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Profile</h2>
        </div>

        <div className='flex flex-col items-stretch  mt-8 justify-items-center'>
          <h2>ID Number: {userDetails.userID}</h2>
          <br />
          <QRCode value={userDetails._id} />
          <br />
          <p>Kindly show the QR code to the Foodbank</p>
        </div>

      </div>
    </Layout>
  ) : (
    <Layout home>
      <div className='bg-white m-6 shadow-md p-8 rounded mt-10 flex flex-col items-strech'>
        <form class='bg-white rounded px-8 pt-6 pb-8 mb-4' onSubmit={loginUser}>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2' for='username'>
              User Login
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='idNumber' name='idNumber' type='text' autoComplete='name' placeholder='NRIC / ID Number' required />
          </div>
          <div class='flex items-center justify-between'>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
export default Home
