import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./firebaseMethods/auth.js"
import { login, logout } from "./store/authSlice.js"
import { Outlet } from "react-router-dom"


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
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 w-full">
      <Outlet/>
    </div>
  )
}

export default App