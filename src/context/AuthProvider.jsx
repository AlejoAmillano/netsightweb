import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import env from 'react-dotenv'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    authUser()
  }, [])

  const authUser = async () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (!token || !user) {
      return false
    }

    const userObj = JSON.parse(user)
    const userId = userObj.id

    const request = await fetch(
      process.env.API_URL + 'user/profile/' + userId,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    )
    const data = await request.json()
    setAuth(data.user)
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
