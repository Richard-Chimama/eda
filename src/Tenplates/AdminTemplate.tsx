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
    </Container>
  )
}


const Container = styled.div`
  background-color: #d2cccc;
  min-width: 400px;
  margin-top: -1rem;

  @media screen and (max-width: 450px){
    font-size: 12px;
  }
`

const Section = styled.section`
    background-color: #f6f0f0;
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 15px;

    @media screen and (max-width: 480px){
      width: 95%;
    }
`

export default AdminTemplate