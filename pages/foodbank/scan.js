import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import QrReader from 'react-qr-scanner'

import Layout from '../../components/layoutFoodbank'

const QrReader = dynamic(() => import('react-qr-scanner'), {
  ssr: false
})

const ScanCollector = () => {
  const [qrString, setQRString] = useState('')
  const [hasScanned, setHasScanned] = useState(false)

  const handleScan = (qrObj) => {
    if (qrObj && qrObj.text) {
      setHasScanned(true)
      setQRString(qrObj.text)
    }
    console.log('QRSTRING', qrString)
  }

  const handleError = (err) => console.log(err)

  return (
    <Layout>
      <Head>
        <title>Scan</title>
      </Head>
      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Scan Collector</h2>
        </div>

        <div className='flex flex-col items-stretch  mt-8 '>
          <div>
            {
              hasScanned
                ? <p>{qrString}</p>
                : <QrReader
                    facingMode='rear'
                    delay={100000}
                    onError={(err) => handleError(err)}
                    onScan={(obj) => handleScan(obj)}
                    style={{ width: '80%', margin: '0 auto' }}
                  />
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ScanCollector
