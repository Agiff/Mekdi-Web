import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
