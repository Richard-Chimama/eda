import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import styled from "styled-components"
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

const Template = () => {
  return (
    <div>
        <Nav />
        <Header />

        <section>
            <Outlet />
        </section>
        <Footer />
    </div>
  )
}

export default Template