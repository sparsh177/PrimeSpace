import Router from 'next/router';
import Head from 'next/head';
import nProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout'
<link rel="icon" href="../assets/image/favicon.png" sizes="any" />

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>
    </>
  )
}
