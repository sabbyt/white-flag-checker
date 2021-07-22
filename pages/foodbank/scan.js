import Head from 'next/head'

import Layout from '../../components/layout'
import ContentCard from '../../components/contentcard'

const ScanCollector = () => (
  <Layout>
    <Head>
      <title>Scan</title>
    </Head>
    <ContentCard>
      <div className='flex-1'>
        <h2 className='text-gray-700 font-semibold'>Scan Collector</h2>
      </div>

      <div className='flex flex-col items-stretch mt-8 '>

        {/* <a href='/' className='buttons'>
            <h2 className='text-sm text-center text-gray-600'>Scan QR</h2>
          </a> */}

      </div>
    </ContentCard>
  </Layout>
)

export default ScanCollector
