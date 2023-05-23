import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'


const AdminTemplate = () => {
  return (
    <Container>
        <Nav />
        <Section>
            <Outlet />
        </Section>
        <Footer />
    </Container>
  )
}


const Container = styled.div`
  background-color: #d2cccc;
  min-width: 400px;

  @media screen and (max-width: 480px){
    font-size: 12px;
  }
`

const Section = styled.section`
    background-color: #f6f0f0;
    width: 80%;
    margin: 1rem auto 2rem auto;

    @media screen and (max-width: 480px){
      width: 95%;
    }
`

export default AdminTemplate