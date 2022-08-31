import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
import Menu from './menu'

const Layout = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
    </div>
  )
}

export default Layout