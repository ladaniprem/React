import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// StrictMode is already imported above, removing duplicate import
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import './index.css'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/ladaniprem')
//   return response.json()
// }

// const router = createBrowserRouter([
//   {
//      path : '/',
//      element : <Layout />,
//      children:[
//       {
//          path: "",
//          element: <Home />
//       },
//       {
//          path: "about",
//          element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//      ]
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        path='github' 
        element={<Github />}
        loader={githubInfoLoader}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
