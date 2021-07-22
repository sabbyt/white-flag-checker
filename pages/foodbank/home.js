import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../../components/layoutFoodbank'

const FoodbankHome = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='bg-white p-8 rounded-br-md rounded-bl-md mt-10'>
        <h2 className='text-gray-700 font-semibold'>Foodbank Portal</h2>
        <div className='flex flex-col items-stretch mt-8 '>
          <Link href='/foodbank/scan'>
            <div className='buttons'>
              <img className='buttonsImage' src='/images/qrcustomer.png' />
              <h2 className='text-sm text-center text-gray-600 mt-4 '>Scan Collector</h2>
            </div>
          </Link>
          <br />
          <Link href='/foodbank/manual'>
            <div className='buttons'>
              <img className='buttonsImage' src='/images/category.png' />
              <h2 className='text-sm text-center text-gray-600 mt-4 '>Manual Entry</h2>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default FoodbankHome
