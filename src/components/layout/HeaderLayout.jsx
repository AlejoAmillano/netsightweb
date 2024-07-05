import React from 'react'
import useAuth from '../../hooks/useAuth'
import HeaderPublic from './public/Header'
import HeaderPrivate from './private/Header'

const HeaderLayout = () => {
  const { auth } = useAuth()
  return <>{!auth._id ? <HeaderPublic /> : <HeaderPrivate />}</>
}

export default HeaderLayout
