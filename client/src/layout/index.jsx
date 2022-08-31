import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../layout/footer'
import Menu from './menu'
import styles from "./layout.module.scss"
const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles["row"]}>
        <div className={styles["content"]}>
          <Outlet />
        </div>
        <div className={styles["menu"]}>
          <Menu />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Layout