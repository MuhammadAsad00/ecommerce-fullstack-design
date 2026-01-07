import React from 'react'
import Navbar from '../common/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../common/Footer'

const Layout = () => {
  const location = useLocation();

  // 1. Hide both Navbar and Footer on these pages (e.g., Auth)
  const hideAllOn = ['/login'];
  
  // 2. Hide ONLY the Footer on these pages (e.g., Cart)
  const hideFooterOn = ['/cart'];

  const shouldHideAll = hideAllOn.includes(location.pathname);
  const shouldHideFooter = shouldHideAll || hideFooterOn.includes(location.pathname);

  return (
    <>
      {/* Show Navbar unless on Auth pages */}
      {!shouldHideAll && <Navbar />}
      
      <main className="min-h-screen">
        <Outlet />
      </main>
      
      {/* Show Footer unless on Auth pages OR Cart page */}
      {!shouldHideFooter && <Footer />}
    </>
  )
}

export default Layout