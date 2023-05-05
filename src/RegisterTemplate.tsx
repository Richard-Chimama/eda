import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://eda-d2eae.web.app/eda-d2eae/us-central1/App/api",
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