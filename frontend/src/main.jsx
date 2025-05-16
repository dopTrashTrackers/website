import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Login, Signup, DashBoard, AddPostOffice, GivePermission} from './components'
import PostOfficeForm from './components/PostOfficeForm.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import ComplaintForm from './components/ComplaintForm.jsx'
import NewCamera from './components/NewCamera.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <AuthLayout authentication={false}>
      <Login />
    </AuthLayout>,
  },
  {
    path: '/login',
    element: 
    <AuthLayout authentication={false}>
      <Login />
    </AuthLayout>,
  },
  {
    path: '/signup',
    element: 
    <AuthLayout authentication={false}>
      <Signup />
    </AuthLayout>,
  },
  {
    path: '/postform',
    element: <PostOfficeForm />
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
        path: "/home/dashboard/:slug",
        element: <DashBoard />
      },
      {
        path: "/home/dashboard/:slug/new-cam",
        element: <NewCamera />
      },
      {
        path: "/home/register",
        element: <AddPostOffice/>
      },
      {
        path: '/home/addPostOffice',
        element: <AddPostOffice />
      },
      {
        path: '/home/permission',
        element: <GivePermission />
      },
      {
        path: '/home/raise-complaint',
        element: <ComplaintForm />
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
