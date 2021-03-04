import { chakra } from '@chakra-ui/react'
import GoogleFonts from 'next-google-fonts'
import Footer from './footer'
import Nav from './nav'

function Layout({ children }) {
  return (
    <chakra.div className='root' bgColor='white'>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@800&family=Black+Han+Sans&display=swap' />
      <Nav />
      <main>{children}</main>
      <Footer />
    </chakra.div>
  )
}

export default Layout
