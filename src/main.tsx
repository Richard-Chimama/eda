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
import PatientFiches from './Pages/Admin/Patients/Patient/PatientFiches'
import PatientComplaint from './Pages/Admin/Patients/Patient/PatientFiches/PatientComplaints'
import PatientExams from './Pages/Admin/Patients/Patient/PatientFiches/PatientExams'
import PatientVisits from './Pages/Admin/Patients/Patient/PatientFiches/PatientVisits'
import PatientMedicine from './Pages/Admin/Patients/Patient/PatientFiches/PatientMedicine'
import Profile2 from "./Pages/Main/Profile"


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
  link: link(),
  cache: cache,
  resolvers: {},
  connectToDevTools: true
})

interface propData{
  isLoggedIn: any,
}

const data: propData = {
  isLoggedIn: !!localStorage.getItem('token')
}

const storedUser = localStorage.getItem('user');
const parsedUser = storedUser ? JSON.parse(storedUser) : null;
const user = parsedUser ? parsedUser : { user: null };


cache.writeQuery({
  query: gql`
    query isLoginStatus {
      isLoggedIn @client
    }
  `,
  data: data
})

cache.writeQuery({
  query: gql`
    query loggedInUser {
      loggedInUser @client
    }
  `,
  data: {
    user: user,
  },
});

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
        path:"/main/profile",
        element: <Profile2 />
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
      },
      {
        path:"/admin/patient/:id/history",
        element: <PatientFiches />
      },
      {
        path:"/admin/patient/:id/visits",
        element: <PatientVisits />
      },
      {
        path:"/admin/patient/:id/exams",
        element: <PatientExams />
      },
      {
        path:"/admin/patient/:id/complaint",
        element: <PatientComplaint />
      },
      {
        path:"/admin/patient/:id/medicine",
        element: <PatientMedicine />
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
