import Head from 'next/head'
import Link from 'next/link'

import styles from './layoutFoodbank.module.css'

export const siteTitle = 'The White Flag Project'

export default function LayoutFoodbank ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <div className='mx-auto'>
        <img className='rounded-tr-md rounded-tl-md h-48 w-full' src='/images/pexels-alex.jpg' />
      </div>
      {
      !home && (
        <div className={styles.backToHome}>
          <Link href='/foodbank/home'>
            <a>← Back to home</a>
          </Link>
        </div>
      )
      }
      <main>{children}</main>
    </div>
  )
}
