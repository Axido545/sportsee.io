import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/dashboard/Dashbord.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error/error.jsx'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user/:id',
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: '/*',
    element: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
