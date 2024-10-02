import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>                 // header and footer will same but Outlet will dynamically change
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
