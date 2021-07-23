import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import ContentCard from '../../components/contentcard'
import Layout from '../../components/layout'

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false
})

const ScanCollector = () => {
  const router = useRouter()
  // const [qrString, setQRString] = useState('')
  const [hasScanned, setHasScanned] = useState(false)
  const handleScan = (qrString) => {
    if (qrString && qrString.length > 0) {
      setHasScanned(true)
      // setQRString(qrString)
      router.push({
        pathname: '/collector/history/[id]',
        query: { id: qrString }
      })
    }
  }

  const handleError = (err) => console.log(err)

  return (
    <Layout>
      <Head>
        <title>Scan</title>
      </Head>
      <ContentCard>
        <div className='flex-1'>
          <h2 className='text-gray-700 font-semibold'>Scan Collector</h2>
        </div>

        <div className='flex flex-col items-stretch  mt-8 '>
          <div>
            {
              hasScanned
                ? <p>{'Getting collector\'s history...'}</p>
                : <QrReader
                    facingMode='environment'
                    onError={(err) => handleError(err)}
                    onScan={(str) => handleScan(str)}
                    style={{ width: '80%', margin: '0 auto' }}
                  />
            }
          </div>
        </div>
      </ContentCard>
    </Layout>
  )
}

export default ScanCollector
