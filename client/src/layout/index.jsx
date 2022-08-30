import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
import Menu from './menu'
import Manual from '../components/manual'
const Layout = () => {
  return (
    <div>
      <Header />
      <Manual />
      <Menu />
      <Outlet />
    </div>
  )
}

export default Layout