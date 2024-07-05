import React from 'react'
import Nav from './Nav'
import { useRef, useEffect } from 'react'
import Logo from '../../../assets/img/logo.png'

const HeaderPrivate = () => {
  const homeMobileScript = useRef(null)

  useEffect(() => {
    if (homeMobileScript.current) {
      const script = document.createElement('script')
      script.text = `
        const listenForUrlChangesMobileMenu = () => {
          let url = location.href;
          document.body.addEventListener('click', () => {
            requestAnimationFrame(() => {
              if (url!== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
              }
            });
          }, true);
        };

        const runMobileMenuCodeEmbed = () => {
          // Mobile menu
          const mobileMenu = document.querySelector('#mobile-menu')

          // Buttons
          const closeButton = document.querySelector('#close-mobile-menu')
          const openButton = document.querySelector('#open-mobile-menu')

          // On openButton click, set the mobileMenu position left to -100vw
          openButton && openButton.addEventListener('click', function() {
            mobileMenu.style.transform = 'translateX(0%)'
          })

          // On closeButton click, set the mobileMenu position to 0vw
          closeButton && closeButton.addEventListener('click', function() {
            mobileMenu.style.transform = 'translateX(100%)'
          })
        }

        runMobileMenuCodeEmbed()
        listenForUrlChangesMobileMenu()
      `
      homeMobileScript.current.appendChild(script)
    }
  }, [homeMobileScript])
  return (
    <header className="home-navbar">
      <img alt="Logo" src={Logo} className="home-branding-logo" />
      <h3 style={{ color: 'black', fontWeight: '400' }}>NETSIGHT</h3>
      <Nav></Nav>
      <div className="home-mobile-script" ref={homeMobileScript}></div>
    </header>
  )
}

export default HeaderPrivate
