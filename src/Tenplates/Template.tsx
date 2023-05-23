import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import { gql, useApolloClient } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Template = () => {
  const navigate = useNavigate()
  const client = useApolloClient()
  const state:any = client.cache.readQuery({
    query: gql`
      query isLoginStatus { 
        isLoggedIn @client
      }
    `
  })

  useEffect(()=>{
    if(!state.isLoggedIn){
      navigate("/enregistrer/signin")
    }
  },[])
 
  

  return (
    <Container>
        <header>
          <Nav />
          <Header />
        </header>

        <section>
            <Outlet />
        </section>

        <footer>
         <Footer />
        </footer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;

  & > header{
    grid-row: 1;
  }

  & > section{
    grid-row: 2;
  }

  & > footer{
    grid-row: 3;
  }

  @media screen and (max-width:450px){
    font-size: 12px;
  }
`


export default Template