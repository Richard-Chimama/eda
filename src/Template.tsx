import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import styled from "styled-components"

const Template = () => {
  return (
    <div>
        <Header />

        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default Template