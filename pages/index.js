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
      <h2>{userDetails.userID}</h2>
      <QRCode value={userDetails._id} />
    </Layout>
  ) : (
    <Layout>
      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
        <form onSubmit={loginUser}>
          <label htmlFor='idNumber'>ID Number</label>
          <input id='idNumber' name='idNumber' type='text' autoComplete='name' required />
          <button type='submit'>Login</button>
        </form>
      </div>
    </Layout>
  )
}
export default Home
