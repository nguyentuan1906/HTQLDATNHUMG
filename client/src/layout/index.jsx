import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Menu from './menu'
const Layout = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Layout