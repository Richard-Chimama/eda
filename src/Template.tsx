import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, ApolloLink, concat, gql } from '@apollo/client';

const uri = "http://127.0.0.1:5001/eda-server/us-central1/App/api"
const httpLink = new HttpLink({uri})
const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    }
  }));

  return forward(operation);
})



const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
})

//check for a local token
const data = {
  isLoggedIn: !!localStorage.getItem('token')
}

/* cache.writeQuery({
  query: gql`
    query isLoggedIn{
      isLoggedIn
    }
  `,
  data:{
    isLoggedIn: data
  }
}) */
const Template = () => {
  return (
    <ApolloProvider client={client}>
        <Nav />
        <Header />

        <section>
            <Outlet />
        </section>
        <Footer />
    </ApolloProvider>
  )
}

export default Template