/*-------------------------------React-Router-DOM-----------------------------------------
it is not a essential core part of React it is the third party library.*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// 1st method to create routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// 2nd Method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>                       // for nesting we are giving Layout 
      <Route path='' element={<Home />} />                      // we can more nesting with the help of Route.
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />           // userid is very important value
      <Route 
      loader={githubInfoLoader}   // if we want to fetch data from api then in this case if we hover to Github link then it will call the api even before useEffect 
                                  // and we can call api here also. 
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />       // This component takes probes otherwise it will not work
  </React.StrictMode>,
)
