import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './Tenplates/Template'
import Fiche from './Pages/Fiche/Fiche'
import Recherche from './Pages/Recherche/Recherche'
import Rapport from './Pages/Rapport/Rapport'
import Signup from './Pages/Singup/Signup'
import RegistorHospital from './Pages/RegisterHospital'
import RegisterTemplate from './Tenplates/RegisterTemplate'
import Signin from './Pages/Signin/Signin'
import FirstPage from './Pages/FirstPage'

import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink, HttpLink, concat } from '@apollo/client';
import Dashboard from './Pages/Admin/Dashboard'
import AdminTemplate from './Tenplates/AdminTemplate'

const cache = new InMemoryCache()
const httpLink = new HttpLink({uri:"https://eda-server4-production.up.railway.app/api" })

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

const link = ()=>{
  if(!!localStorage.getItem('token'))return concat(authMiddleware, httpLink)
  else return httpLink 
}


const client = new ApolloClient({
  //uri: "https://eda-server4-production.up.railway.app/api",
  link: link(),
  cache: cache,
  resolvers: {},
  connectToDevTools: true
})

interface propData{
  isLoggedIn: any
}

const data: propData = {
  isLoggedIn: !!localStorage.getItem('token')
}

cache.writeQuery({
  query: gql`
    query isLoginStatus {
      isLoggedIn @client
    }
  `,
  data: data
})


const router = createBrowserRouter([
  {
    path:"/",
    element: <FirstPage />
  },
  {
    path: "/main",
    element: <Template />,
    children: [
      {
        path:"/main",
        element: <App />
      },
      {
        path:"/main/fiche",
        element: <Fiche />
      },
      {
        path:"/main/recherche",
        element: <Recherche />
      },
      {
        path:"/main/rapport",
        element: <Rapport />
      }
      
    ]
  },{
    path: "/enregistrer",
    element: <RegisterTemplate />,
    children: [
      {
        path: "/enregistrer",
        element: <RegistorHospital />
      }
      ,{
        path: "/enregistrer/signup/:id",
        element: <Signup />
      },{
        path: "/enregistrer/signin",
        element: <Signin />
      }
    ]

  },
  {
    path:"/admin",
    element: <AdminTemplate />,
    children: [
      {
        path:"/admin",
        element: <Dashboard />
      }
    ]
  }
])

export const MyContext = React.createContext({
  data:[
    {user: false}
  ]
})
const localData = {
  data: []
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyContext.Provider value={localData}>
      <RouterProvider router={router} />
      </MyContext.Provider>
    </ApolloProvider>
  </React.StrictMode>
);
