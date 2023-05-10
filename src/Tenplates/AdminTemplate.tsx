import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'

const AdminTemplate = () => {
  return (
    <>
        <Nav />
        <section>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}

export default AdminTemplate