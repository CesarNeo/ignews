import Head from 'next/head'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

import { AppProps } from 'next/app'
import { Header } from '../components/Header'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <title>ignews</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
