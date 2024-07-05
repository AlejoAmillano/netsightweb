import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Layout = () => {
  const { auth } = useAuth()
  return (
    <>
      <div className="home-container">
        {auth._id ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </div>
    </>
  )
}

export default Layout
