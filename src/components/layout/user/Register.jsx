import React, { useState, useEffect, useRef } from 'react'
import useForm from '../../../hooks/useForm'
import { Link } from 'react-router-dom'
import env from 'react-dotenv'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { form, changed } = useForm({})

  const font =
    'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'

  const [alert, setAlert] = useState('not_sended')

  const saveUser = async (e) => {
    e.preventDefault()
    let newUser = form

    const request = await fetch(process.env.API_URL + 'user/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await request.json()
    if (data.status === 'success') {
      setAlert('saved')
      toast.success('User registered correctly!', {
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
      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    } else if (data.status === 'exists') {
      setAlert('exists')
      toast.warn('User already exists..', {
        position: 'top-right',
        autoClose: 3000,
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
    } else {
      setAlert('error')
      toast.error('User could not be registered..', {
        position: 'top-right',
        autoClose: 3000,
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
    <div className="sign-up-container">
      {alert == 'saved' ? <ToastContainer /> : ''}
      {alert == 'exists' ? <ToastContainer /> : ''}
      {alert == 'error' ? <ToastContainer /> : ''}
      <div className="sign-up-container1">
        <div className="sign-up-container2 thq-section-padding">
          <div className="sign-up-max-width thq-section-max-width">
            <div className="sign-up-form-root">
              <h2 className="sign-up-text thq-heading-2">
                Create your account
              </h2>
              <div className="sign-up-divider">
                <div className="sign-up-divider1"></div>
                <span className="sign-up-text2 thq-body-large">OR</span>
                <div className="sign-up-divider2"></div>
              </div>
              <div className="sign-up-form">
                <form className="sign-up-form1" onSubmit={saveUser}>
                  <div className="sign-up-name">
                    <label
                      htmlFor="thq-sign-in-2-email"
                      className="sign-up-text3 thq-body-large"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      id="thq-sign-in-2-name"
                      required="true"
                      name="name"
                      placeholder="Name"
                      className="sign-up-textinput thq-body-large thq-input"
                      onChange={changed}
                    />
                  </div>
                  <div className="sign-up-email">
                    <label
                      htmlFor="thq-sign-in-2-email"
                      className="sign-up-text4 thq-body-large"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="thq-sign-in-2-email"
                      required="true"
                      name="email"
                      placeholder="Email address"
                      className="sign-up-textinput1 thq-body-large thq-input"
                      onChange={changed}
                    />
                  </div>
                  <div className="sign-up-password">
                    <div className="sign-up-container4">
                      <label
                        htmlFor="thq-sign-in-2-password"
                        className="sign-up-text5 thq-body-large"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      id="thq-sign-in-2-password"
                      required="true"
                      name="password"
                      placeholder="Password"
                      className="sign-up-textinput2 thq-body-large thq-input"
                      onChange={changed}
                    />
                  </div>
                  <div className="sign-up-container5">
                    <button
                      type="submit"
                      className="sign-up-button1 thq-button-filled"
                    >
                      <span className="sign-up-text7 thq-body-small">
                        Sign Up
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="sign-up-container6">
              <div className="sign-up-divider3"></div>
              <span className="sign-up-text8 thq-body-large">
                Do you already have an account?
              </span>
              <Link to="/login" style={{ width: '100%' }}>
                <button type="button" className="sign-up-button2 button">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
