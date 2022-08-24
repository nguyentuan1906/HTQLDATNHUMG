import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <ToastContainer />
    </div>
  )
}

export default Layout