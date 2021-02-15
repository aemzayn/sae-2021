import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/sections/layout'
import '../styles/globals.scss'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.scss'

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = url => {
  NProgress.done()
  // gtag.pageview(url)
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
