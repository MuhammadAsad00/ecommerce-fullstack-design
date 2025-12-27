import React from 'react'
import Navbar from '../common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout