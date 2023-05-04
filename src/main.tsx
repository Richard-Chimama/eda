import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './Template'
import Fiche from './Pages/Fiche/Fiche'
import Recherche from './Pages/Recherche/Recherche'
import Rapport from './Pages/Rapport/Rapport'
import Signup from './Pages/Singup/Signup'
import RegistorHospital from './Pages/RegisterHospital'
import RegisterTemplate from './RegisterTemplate'
import Signin from './Pages/Signin/Signin'
import FirstPage from './Pages/FirstPage'

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

  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
