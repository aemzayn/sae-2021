import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/sections/layout'
import '../styles/globals.css'

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
