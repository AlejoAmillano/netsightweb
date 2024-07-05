import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Avatar from '../../../../assets/img/avatar.png'
import useForm from '../../../../hooks/useForm'
import useAuth from '../../../../hooks/useAuth'
import SerializeForm from '../../../../helpers/SerializeForm'
import { ToastContainer, toast, Bounce } from 'react-toastify'

const Profile = () => {
  const { form, changed } = useForm

  const [alert, setAlert] = useState('not_sended')

  const { auth, setAuth } = useAuth()

  const token = localStorage.getItem('token')

  const font =
    'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'

  const updateUser = async (e) => {
    e.preventDefault()

    let newDataUser = SerializeForm(e.target)

    delete newDataUser.file0

    const request = await fetch(process.env.API_URL + 'user/update', {
      method: 'PUT',
      body: JSON.stringify(newDataUser),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })

    const data = await request.json()
    if (data.status === 'success' && data.user) {
      setAlert('update')
      toast.success('User updated correctly', {
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
      delete data.user.password
      setAuth(data.user)
    } else {
      setAlert('error')
      toast.warning('Error updating user', {
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

    const fileInput = document.querySelector('#file')

    if (data.status === 'success' && fileInput.files[0]) {
      const formData = new FormData()

      formData.append('file0', fileInput.files[0])

      const uploadRequest = await fetch(process.env.API_URL + 'user/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: token,
        },
      })

      const uploadData = await uploadRequest.json()
      if (data.status === 'success' && uploadData.user) {
        delete uploadData.user.password
        setAuth(uploadData.user)
        setAlert('update')
        toast.success('Avatar updated correctly', {
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
      } else {
        setAlert('error')
        toast.warning('Error updating avatar', {
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
  }

  return (
    <div className="dashboard-container">
      {alert == 'update' ? <ToastContainer /> : ''}
      {alert == 'error' ? <ToastContainer /> : ''}

      <div className="dashboard-dashboard">
        <Sidebar></Sidebar>
        <div className="dashboard-content">
          <div className="dashboard-main-content1">
            <div className="dashboard-title1">
              <span className="dashboard-text16">Profile</span>
            </div>
            <div className="dashboard-container3">
              <input
                type="file"
                id="file"
                name="file0"
                style={{
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
              />
              {auth.image != 'default.png' && (
                <img
                  alt="pastedImage"
                  src={process.env.API_URL + 'user/avatar/' + auth.image}
                  className="dashboard-pasted-image"
                />
              )}
              {auth.image == 'default.png' && (
                <img
                  alt="pastedImage"
                  src={Avatar}
                  className="dashboard-pasted-image"
                />
              )}
            </div>
            <label htmlFor="avatar-label">Upload your avatar</label>
            <form className="dashboard-form" onSubmit={updateUser}>
              <input
                type="text"
                name="name"
                defaultValue={auth.name}
                className="dashboard-textinput input"
                onChange={changed}
              />
              <input
                type="text"
                name="email"
                defaultValue={auth.email}
                className="dashboard-textinput1 input"
                onChange={changed}
              />
              <input
                type="text"
                name="password"
                placeholder="New password"
                className="dashboard-textinput2 input"
                onChange={changed}
              />
              <button type="submit" className="dashboard-button button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
