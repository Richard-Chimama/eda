import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './Tenplates/Template'
import Fiche from './Pages/Main/Fiche/Fiche'
import Recherche from './Pages/Main/Recherche/Recherche'
import Rapport from './Pages/Main/Rapport/Rapport'
import Signup from './Pages/RegisterUser/Singup/Signup'
import RegistorHospital from './Pages/RegisterUser/RegisterHospital'
import RegisterTemplate from './Tenplates/RegisterTemplate'
import Signin from './Pages/RegisterUser/Signin/Signin'
import FirstPage from './Pages/FirstPage'

import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink, HttpLink, concat } from '@apollo/client';
import Dashboard from './Pages/Admin/Dashboard'
import AdminTemplate from './Tenplates/AdminTemplate'
import Users from './Pages/Admin/Users/Users'
import RegisterPatient from './Pages/Main/RegisterPatient'
import { createUploadLink } from "apollo-upload-client"
import Patients from './Pages/Admin/Patients'
import Patient from './Pages/Admin/Patients/Patient'
import ErrorElement from './Components/ErrorElement'
import Profile from './Pages/Admin/Profile'

//http://localhost:6002/api
//"https://eda-server4-production.up.railway.app/api"
const cache = new InMemoryCache()
const httpLink = createUploadLink({uri:"https://eda-server4-production.up.railway.app/api" })
const currentTimeStamp = new Date().getTime()

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      accept: 'application/json',
      authorization: localStorage.getItem('token') || null,
      'Apollo-Require-Preflight': currentTimeStamp.toString(), 
      
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
    element: <FirstPage />,
    errorElement: <ErrorElement />
  },
  {
    path: "/main",
    element: <Template />,
    errorElement: <ErrorElement />,
    children: [
      {
        path:"/main",
        element: <App />
      },
      {
        path:"/main/fiche/:id",
        element: <Fiche />
      },
      {
        path:"/main/recherche",
        element: <Recherche />
      },
      {
        path:"/main/rapport",
        element: <Rapport />
      },
      {
        path:"/main/enregistrer_patient",
        element: <RegisterPatient />
      }
      
    ]
  },{
    path: "/enregistrer",
    element: <RegisterTemplate />,
    errorElement: <ErrorElement />,
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
    errorElement: <ErrorElement />,
    children: [
      {
        path:"/admin",
        element: <Dashboard />
      },
      {
        path:"/admin/users",
        element: <Users />
      },
      {
        path:"/admin/profile",
        element: <Profile />
      },
      {
        path:"/admin/patients",
        element: <Patients />
      },
      {
        path:"/admin/patient/:id",
        element: <Patient />
      }
    ]
  }
])



createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
