import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import Signup from './login/signup/Signup.jsx'
import Login from './login/signup/Login.jsx'
// import Kids from './components/Nested/Kids.jsx'

import ContactUs from './components/ContactUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter([


  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />,
      
        
      },
      {
        path: "cart",
        element: <Cart />
      }, {
        path: "contact",
        element: <Contact />
      },
      {
        path: "signup",
        element: <Signup />

      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "contactus",
        element: <ContactUs />
      }


    ]

  }])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
