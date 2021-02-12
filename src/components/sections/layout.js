import Head from '../meta/head'
import Footer from './footer'
import Nav from './nav'

function Layout({ children }) {
  return (
    <div className='root'>
      <Head />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
