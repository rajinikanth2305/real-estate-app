import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme'
import Layout from '../components/LAyout';
const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})
  Router.events.on('routeChangeStart',()=>{
    NProgress.start();

  })
  Router.events.on('routeChangeComplete',()=>{
    NProgress.done();

  })
  

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
      <Layout>
          <Component {...pageProps} />
        </Layout>
        </ChakraProvider>
        </>
  );
}

export default MyApp;