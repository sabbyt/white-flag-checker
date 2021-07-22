import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../../components/layout'
import ContentCard from '../../components/contentcard'

const MenuButtons = (props) => {
  return (
  <Link href={props.href} passHref>
    <div className='buttons'>
      <img className='buttonsImage' src={props.src} />
      <h2 className='text-sm text-center text-gray-600 mt-4 '>{props.text}</h2>
    </div>
  </Link>
  )
}

const FoodbankHome = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ContentCard>
        <h2 className='text-gray-700 font-semibold'>Foodbank Portal</h2>
        <div className='flex flex-col items-stretch mt-8 gap-6'>
          <MenuButtons href="/foodbank/scan" src="/images/qrcustomer.png" text="Scan Collector" />
          <MenuButtons href="/foodbank/manual" src="/images/category.png" text="Manual Entry" />
        </div>
      </ContentCard>
    </Layout>
  )
}

export default FoodbankHome
