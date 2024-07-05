import React from 'react'
import BurgerIcon from '../../../assets/img/hamburger.png'
import Logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="home-nav-content1">
        <div className="home-nav-links1">
          <a href="#features" className="home-link03 nav-link">
            Features
          </a>
          <a href="#about-me" className="nav-link">
            About me
          </a>
          <a href="#FAQ" className="nav-link">
            FAQ
          </a>
        </div>
        <div className="home-container02">
          <Link to="/login">
            <div className="get-started home-get-started sign-in">
              <span className="home-text">Sign in</span>
            </div>
          </Link>
          <Link to="/register">
            <div className="home-get-started1 get-started">
              <span className="home-text01">Sign up</span>
            </div>
          </Link>
        </div>
        <div id="open-mobile-menu" className="home-hamburger1 get-started">
          <img alt="image" src={BurgerIcon} className="home-image01" />
        </div>
      </div>
      <div id="mobile-menu" className="home-mobile-menu1">
        <div className="home-branding1">
          <img alt="image" src={Logo} className="home-image03" />
          <div id="close-mobile-menu" className="home-container05">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="home-nav-links3">
          <a href="#features">
            <span className="nav-link">Features</span>
          </a>
          <a href="#about-me">
            <span className="nav-link">About me</span>
          </a>
          <a href="#FAQ">
            <span className="nav-link">FAQ</span>
          </a>
        </div>
        <Link to="/login">
          <div className="get-started home-get-started2">
            <span className="home-text02">Sign in</span>
          </div>
        </Link>
        <Link to="/register">
          <div className="home-get-started3 get-started">
            <span className="home-text03">Sign up</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Nav
