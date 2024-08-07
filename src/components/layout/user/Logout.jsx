import React, { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    setAuth({})

    navigate('/')
    window.location.reload()
  }, [])

  return <div></div>
}

export default Logout
