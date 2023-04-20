import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './Template'
import Fiche from './Pages/Fiche/Fiche'
import Recherche from './Pages/Recherche/Recherche'
import Rapport from './Pages/Rapport/Rapport'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path:"/",
        element: <App />
      },
      {
        path:"/fiche",
        element: <Fiche />
      },
      {
        path:"/recherche",
        element: <Recherche />
      },
      {
        path:"/rapport",
        element: <Rapport />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
