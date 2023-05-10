import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'


const RegisterTemplate = () => {
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

export default RegisterTemplate