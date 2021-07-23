import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'

import Layout, { siteTitle } from '../../../components/layout'
import ContentCard from '../../../components/contentcard'
import { url } from '../../../config';

export async function getServerSideProps (context) {
  if (!context.query || !context.query.id.length === 0) return { error: true }

  const res = await fetch(
    `${url}/api/foodbankCheck`,
    {
      body: JSON.stringify({
        id: context.query.id
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  )

  const data = await res.json()

  // Error
  if (data.error === true) {
    return {
      props: {
        error: true
      }
    }
  }

  return {
    props: {
      ...data
    }
  }
}

const MenuButtons = (props) => {
  return (
    <Link href={props.href} passHref>
      <div className='buttons'>
        <img className='buttonsImage' src={props.src} />
        <h2 className='text-sm text-center text-gray-600 mt-4'>{props.text}</h2>
      </div>
    </Link>
  )
}

const FoodbankHome = props => {
  if (props.error === true) {
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

  let cookieMerchantID = Cookies.get('merchantID')
  let cookieMerchantName = Cookies.get('merchantName')

  if (!cookieMerchantID || !cookieMerchantName) {
    cookieMerchantName = props.merchant.name
    cookieMerchantID = props.merchant.id
    Cookies.set('merchantID', cookieMerchantID)
    Cookies.set('merchantName', cookieMerchantName)
  }

  // Reset cookies if don't match login
  if (cookieMerchantID !== props.merchant.id || cookieMerchantName !== props.merchant.name) {
    Cookies.set('merchantID', props.merchant.id)
    Cookies.set('merchantName', props.merchant.name)
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ContentCard>
        <h2 className='text-gray-700 font-semibold'>Foodbank Portal</h2>
        <h2 className='text-gray-700 font-semibold'>{`Welcome, ${props.merchant.name}!`}</h2>
        <div className='flex flex-col items-stretch mt-8 gap-6'>
          <MenuButtons href='/foodbank/scan' src='/images/qrcustomer.png' text='Scan Collector' />
          <MenuButtons href='/foodbank/manual' src='/images/edit-text.png' text='Manual Entry' />
        </div>
      </ContentCard>
    </Layout>
  )
}

export default FoodbankHome
