import React from 'react'
import Avatar from '../../../assets/img/avatar.png'
import BurgerIcon from '../../../assets/img/hamburger.png'
import Logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="home-nav-content">
        <div className="home-nav-links">
          <a href="#features" className="home-link03 nav-link">
            Features
          </a>
          <a href="#about-me" className="nav-link">
            About me
          </a>
          <a href="#FAQ" className="nav-link">
            FAQ
          </a>
          <Link to="dashboard/scans">
            <div className="home-container01">
              <img
                alt="pastedImage"
                src={Avatar}
                className="home-pasted-image"
              />
            </div>
          </Link>
        </div>
        <div id="open-mobile-menu" className="home-hamburger get-started">
          <img alt="image" src={BurgerIcon} className="home-image" />
        </div>
      </div>
      <div id="mobile-menu" className="home-mobile-menu">
        <div className="home-branding">
          <img alt="image" src={Logo} className="home-image02" />
          <div id="close-mobile-menu" className="home-container03">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="home-nav-links2">
          <a href="#features">
            <span className="nav-link">Features</span>
          </a>
          <a href="#about-me">
            <span className="nav-link">About me</span>
          </a>
          <a href="#FAQ">
            <span className="nav-link">FAQ</span>
          </a>
          <Link to="dashboard/scans">
            <div className="home-container04">
              <img
                alt="pastedImage"
                src={Avatar}
                className="home-pasted-image1"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Nav
