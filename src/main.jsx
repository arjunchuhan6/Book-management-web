import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from  'react-router-dom'

//Creating Routing configuration 

const appRouter=createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/contact',
    element: <Contact />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
