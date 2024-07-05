import React from 'react'
import Avatar from '../../../../assets/img/avatar.png'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import env from 'react-dotenv'

const Sidebar = () => {
  const { auth } = useAuth()

  console.log(auth)

  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-profile">
        <div className="dashboard-container1">
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
        <span className="dashboard-text">{auth.name}</span>
        <span className="dashboard-text01">{auth.email}</span>
      </div>
      <div className="dashboard-menu">
        <Link to="/dashboard/scans">
          <span className="dashboard-text02">
            <span>Scans</span>
          </span>
        </Link>
        <Link to="/dashboard/profile">
          <span className="dashboard-text04">
            <span>Profile</span>
          </span>
        </Link>
      </div>
      <div className="dashboard-menu1">
        <Link to="/dashboard/logout">
          <span className="dashboard-text08">
            <span>Logout</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
