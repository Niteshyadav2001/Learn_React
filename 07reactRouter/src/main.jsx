import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/about.jsx'
import Github ,{gitInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route
          loader = {gitInfoLoader} 
          path='github' 
          element={<Github />} 
          />  
        <Route path='user' element={<User />} >
          <Route path=':id' element={<user/>} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)