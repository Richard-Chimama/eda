import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://127.0.0.1:5001/eda-server/us-central1/App/api",
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