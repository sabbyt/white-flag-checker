import React, { useState } from 'react'
import QRCode from 'react-qr-code'

import Layout from '../components/layoutCollector'

function Home ({ data }) {
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
          <br/>
          <QRCode value={userDetails._id} />
          <br/>
          <p>Kindly show the QR code to the foodbank</p>
        </div>

      </div>
    </Layout>
  ) : (
    <Layout>
      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Login / Register</h2>
        </div>

        <div className='flex flex-col items-stretch mt-8 justify-items-center'>
          <form onSubmit={loginUser}>
            <label htmlFor='idNumber'>Key in your NRIC</label>
            <br/>
            <input id='idNumber' name='idNumber' type='text' autoComplete='name' placeholder='NRIC' className="inputField" required />
            <br/>
            <button type='submit' className='approveButton'>
              Login
            </button>
          </form>
        </div>

      </div>
    </Layout>
  )
}
export default Home
