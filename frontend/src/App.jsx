import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./firebaseMethods/auth.js"
import { login, logout } from "./store/authSlice.js"
import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import NavigationGuide from './components/NavigationGuide.jsx';


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then(
      (userData) => {
        if(userData){
          dispatch(login(userData));
        }
        else{
          dispatch(logout());
        }
      })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-fit w-full bg-blue-gray-50">
      <NavigationGuide />
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App


