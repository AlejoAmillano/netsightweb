import React from 'react'
import { useState } from 'react'
import useForm from '../../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useAuth from '../../../hooks/useAuth'

const Login = () => {
  const { form, changed } = useForm({})
  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const font =
    'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'

  const [alert, setAlert] = useState('not_sended')

  const loginUser = async (e) => {
    e.preventDefault()

    let userToLogin = form

    const request = await fetch(process.env.API_URL + 'user/login', {
      method: 'POST',
      body: JSON.stringify(userToLogin),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await request.json()
    if (data.status === 'success') {
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      setAlert('login')
      toast.success('Logged correctly!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        style: {
          fontFamily: font,
        },
      })
      setAuth(data.user)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } else {
      setAlert('error')
      toast.error('Incorrect email or password..', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        style: {
          fontFamily: font,
        },
      })
    }
  }

  return (
    <div className="sign-in-container">
      {alert == 'login' ? <ToastContainer /> : ''}
      {alert == 'error' ? <ToastContainer /> : ''}
      <div className="sign-in-container1 thq-section-padding">
        <div className="sign-in-max-width thq-section-max-width">
          <div className="sign-in-form-root">
            <h2 className="sign-in-text thq-heading-2">Welcome back!</h2>
            <div className="sign-in-divider">
              <div className="sign-in-divider1"></div>
              <span className="sign-in-text2 thq-body-large">OR</span>
              <div className="sign-in-divider2"></div>
            </div>
            <div className="sign-in-form">
              <form className="sign-in-form1" onSubmit={loginUser}>
                <div className="sign-in-email">
                  <label
                    htmlFor="thq-sign-in-2-email"
                    className="sign-in-text3 thq-body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="thq-sign-in-2-email"
                    required={true}
                    placeholder="Email address"
                    className="sign-in-textinput thq-body-large thq-input"
                    onChange={changed}
                  />
                </div>
                <div className="sign-in-password">
                  <div className="sign-in-container3">
                    <label
                      htmlFor="thq-sign-in-2-password"
                      className="sign-in-text4 thq-body-large"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="thq-sign-in-2-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in-textinput1 thq-body-large thq-input"
                    onChange={changed}
                  />
                </div>
                <div className="sign-in-container4">
                  <button
                    type="submit"
                    className="sign-in-button1 thq-button-filled"
                  >
                    <span className="sign-in-text6 thq-body-small">
                      Sign In
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="sign-in-container5">
            <div className="sign-in-divider3"></div>
            <span className="sign-in-text8 thq-body-large">
              You dont have an account yet?
            </span>
            <Link to="/register" style={{ width: '100%' }}>
              <button type="button" className="sign-in-button2 button">
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
