import React, { useEffect, useState } from 'react'
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
        <Nav />

      <Section>
        <Outlet />
      </Section>
    
    </Container>
  );
}

const Container = styled.div`
  background-color: #d2cccc;
  display: flex;

  @media screen and (max-width:420px){
    font-size: 12px;
  }
`

const Section = styled.section`
    background-color: #f6f0f0;
    width: 80%;
    margin: 0 auto 2rem auto;
    padding-top: 5px;
    padding-bottom: 3rem;
    min-height: 100vh;


    @media screen and (max-width: 480px){
      width: 95%;
    }
`


export default Template