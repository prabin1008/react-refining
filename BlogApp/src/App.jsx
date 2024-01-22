import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js"
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authService && typeof authService.getCurrentUser === 'function') {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }))
          }
          else {
            dispatch(logout())
          }
        })
        .finally(() => setLoading(false))
    }
    else {
      console.error('authService or getCurrentUser is not defined');
      setLoading(false);
    }
  }, [])



  return !loading ? (
    <div
      className="min-h-screen 
    flex flex-wrap
    content-between
  bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          TODO: {<Outlet />}
        </main>
        <Footer />
      </div>
    </div>
  )
    : null
}

export default App
