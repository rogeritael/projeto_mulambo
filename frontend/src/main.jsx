import React from 'react'
import ReactDOM from 'react-dom/client'
import mainstyles from './main-styles.scss'
import { Exploracao } from './routes/exploracao'

import { Home } from './routes/Home'

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import { Login } from './routes/login';
import { Region2 } from './routes/Region2'
import { Alliance } from './routes/alliance'
import { CharProvider } from './context/CharContext'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/exploracao',
        element: <Exploracao />
      },
      {
        path: '/mapa',
        element: <Home />
      },
      {
        path: '/mapa2',
        element: <Region2 />
      },
      {
        path: '/alliance',
        element: <Alliance />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharProvider>
      <RouterProvider router={router} />
    </CharProvider>
  </React.StrictMode>,
)