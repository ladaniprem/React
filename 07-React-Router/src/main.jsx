import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router/dom"
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'

const router = createBrowserRouter([
  {
     path : '/',
     element : <Layout />,
     children:[
      {
         path: "Home",
         element: <Home />
      },
      {
         path: "about",
         element: <About />
      }
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
