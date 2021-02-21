import GoogleFonts from 'next-google-fonts'
import Footer from './footer'
import Nav from './nav'

function Layout({ children }) {
  return (
    <div className='root'>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@800&display=swap' />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
