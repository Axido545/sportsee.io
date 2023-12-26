import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/dashboard/Dashbord.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './error.jsx'



const router = createBrowserRouter([
  {
    path: '/user/:id',
    element: <Dashboard />,
    errorElement: <Error />,  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
