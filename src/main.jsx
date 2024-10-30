import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Users from './Foods.jsx';
import Contact from './Contact.jsx';
import Foods from './Foods.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/foods',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Foods></Foods>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
