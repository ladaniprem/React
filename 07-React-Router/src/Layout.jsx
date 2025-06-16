// layout alternative me App.jsx me bi kar ja sakta hai same work 
// Layout ko some people said as the root component.
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout

//  {/* <Outlet /> is used to render child routes and simple language is their header and footer same rahega under ki chije change hoti rahegi */}