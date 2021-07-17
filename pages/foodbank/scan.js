import Head from 'next/head'

import Layout from '../../components/layoutFoodbank'

const ScanCollector = () => (
  <Layout>
    <Head>
      <title>Scan</title>
    </Head>
    <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10 flex flex-col items-strech'>
      <div className='flex-1'>
        <h2 className='text-gray-700 font-semibold'>Scan Collector</h2>
      </div>

      <div className='flex flex-col items-stretch  mt-8 '>

        {/* <a href='/' className='buttons'>
            <h2 className='text-sm text-center text-gray-600'>Scan QR</h2>
          </a> */}

      </div>

    </div>
  </Layout>
)

export default ScanCollector
