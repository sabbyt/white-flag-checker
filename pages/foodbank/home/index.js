import Head from 'next/head'

import Layout, { siteTitle } from '../../../components/layout'
import ContentCard from '../../../components/contentcard'

const FoodbankHome = props => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ContentCard>
        <h2 className='text-gray-700 font-semibold'>Foodbank Portal</h2>
        <h2 className='text-gray-700 font-semibold'>Access Denied</h2>
      </ContentCard>
    </Layout>
  )
}

export default FoodbankHome
