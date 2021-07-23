import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'

export const siteTitle = 'The White Flag Project'

export default function LayoutCollector ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:title' content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <div className='mx-auto w-full bg-white shadow-lg h-16'>
        <img className='rounded-tr-md rounded-tl-md h-full ml-6' src='/images/whiteflag-logo.svg' type='image/svg+xml' />
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
