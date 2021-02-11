import Head from '../meta/head'
import Nav from './nav'

function Layout({ children }) {
  return (
    <div className='root'>
      <Head />
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
