import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Login from '../components/layout/user/Login'
import Register from '../components/layout/user/Register'
import Scans from '../components/layout/user/dashboard/Scans'
import Profile from '../components/layout/user/dashboard/Profile'
import NotFound from '../components/NotFound'
import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import useAuth from '../hooks/useAuth'
import Logout from '../components/layout/user/Logout'

const Routing = () => {
  const { auth } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {!auth._id && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          )}
          {auth._id && (
            <>
              <Route path="dashboard/scans" element={<Scans />} />
              <Route path="dashboard/profile" element={<Profile />} />
              <Route path="dashboard/logout" element={<Logout />} />
            </>
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
