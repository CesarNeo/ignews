import Head from 'next/head'

import { AppProps } from 'next/app'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ignews</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
