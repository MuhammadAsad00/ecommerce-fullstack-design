import React from 'react'
import Navbar from '../common/Navbar'
import { Outlet, useLocation} from 'react-router-dom'
import Footer from '../common/Footer'

const Layout = () => {
  const location = useLocation();
  const hideOnRoutes = ['/login'];
  const shouldHideLayout = hideOnRoutes.includes(location.pathname);
  return (
    <>
    {!shouldHideLayout && <Navbar/> }
    <Outlet/>
    {!shouldHideLayout && <Footer/> }
    </>
  )
}

export default Layout