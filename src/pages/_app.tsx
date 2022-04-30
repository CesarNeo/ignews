import Head from 'next/head'

import { AppProps } from 'next/app'

import '../styles/global.scss'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ignews</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
