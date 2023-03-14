import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './CustomNavbar'

const Layout = () => {
  return (
    <div>
      <CustomNavbar />
      <Outlet />
    </div>
  )
}

export default Layout
