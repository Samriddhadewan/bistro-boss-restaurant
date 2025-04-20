import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout