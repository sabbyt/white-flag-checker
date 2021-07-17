import Head from 'next/head'

import styles from './layoutCollector.module.css'

export const siteTitle = 'The White Flag Project'

export default function LayoutCollector ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:title' content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <div className='mx-auto'>
        <img className='rounded-tr-md rounded-tl-md h-48 w-full' src='/images/pexels-alex.jpg' />
      </div>
      <main>{children}</main>
    </div>
  )
}
