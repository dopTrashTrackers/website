import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Login, Signup, DashBoard, AddPostOffice} from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: "/dashboard/:slug",
        element: <DashBoard />
      },
      {
        path: "/register",
        element: <AddPostOffice/>
      },
      {
        path: '/addPostOffice',
        element: <AddPostOffice />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
