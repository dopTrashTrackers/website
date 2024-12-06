import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Login, Signup, DashBoard, AddPostOffice} from './components'
import AuthLayout from './components/AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: 
    <AuthLayout authentication={true}>
      <App />
    </AuthLayout>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/home/signup',
        element: <Signup />
      },
      {
        path: "/home/dashboard/:slug",
        element: <DashBoard />
      },
      {
        path: "/home/register",
        element: <AddPostOffice/>
      },
      {
        path: '/home/addPostOffice',
        element: <AddPostOffice />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
