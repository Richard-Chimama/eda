import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import { gql, useApolloClient } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'


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
    <>
        <Nav />
        <Header />

        <section>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}

export default Template