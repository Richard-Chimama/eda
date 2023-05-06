import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://eda-server4-production.up.railway.app/api",
  cache: new InMemoryCache(),
  connectToDevTools: true
})


const RegisterTemplate = () => {
  return (
    <ApolloProvider client={client}>
        <Nav />

        <section>
            <Outlet />
        </section>
        <Footer />
    </ApolloProvider>
  )
}

export default RegisterTemplate