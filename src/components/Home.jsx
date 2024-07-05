import React from 'react'
import { useEffect, useRef } from 'react'
import IconDomain from '../assets/img/icondomain.png'
import IconBloqued from '../assets/img/iconbloqued.png'
import IconControlPanel from '../assets/img/iconcontrolpanel.png'
import PhishingFoto from '../assets/img/phishingfoto.png'
import Logo from '../assets/img/logo.png'
import HeaderLayout from './layout/HeaderLayout'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'

const Home = () => {
  const homeContainer12Ref = useRef(null)
  const vantaRef = useRef(null)
  useEffect(() => {
    GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      spacing: 30,
      color: 0x0,
      color2: 0x0,
      size: 2.0,
      backgroundColor: 0xffffff,
    })
  }, [])

  useEffect(() => {
    if (homeContainer12Ref.current) {
      const script = document.createElement('script')
      script.text = `
        /*
        Accordion - Code Embed
        */
        const listenForUrlChangesAccordion = () => {
          let url = location.href
          document.body.addEventListener(
            'click',
            () => {
              requestAnimationFrame(() => {
                if (url !== location.href) {
                  runAccordionCodeEmbed()
                  url = location.href
                }
              })
            },
            true
          )
        }

        const runAccordionCodeEmbed = () => {
          const accordionContainers = document.querySelectorAll(
            '[data-role="accordion-container"]'
          ) // All accordion containers
          const accordionContents = document.querySelectorAll(
            '[data-role="accordion-content"]'
          ) // All accordion content
          const accordionIcons = document.querySelectorAll(
            '[data-role="accordion-icon"]'
          ) // All accordion icons

          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = 'none' //Hides all accordion contents
          })

          accordionContainers.forEach((accordionContainer, index) => {
            accordionContainer.addEventListener('click', () => {
              accordionContents.forEach((accordionContent) => {
                accordionContent.style.display = 'none' //Hides all accordion contents
              })

              accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = 'rotate(0deg)' // Resets all icon transforms to 0deg (default)
              })

              accordionContents[index].style.display = 'flex' // Shows accordion content
              accordionIcons[index].style.transform = 'rotate(180deg)' // Rotates accordion icon 180deg
            })
          })
        }

        runAccordionCodeEmbed()
        listenForUrlChangesAccordion()
        `
      homeContainer12Ref.current.appendChild(script)
    }
  }, [homeContainer12Ref])
  return (
    <>
      <HeaderLayout />
      <section ref={vantaRef} className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">Stay safe from phishing</h1>
              </header>
              <div className="home-buttons">
                <a href="#threat">
                  <div className="home-get-started4 button">
                    <span className="home-text04">Learn more</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section id="threat" className="home-section1">
        <h2 className="home-text05">Understanding the threat</h2>
        <div className="home-phishing">
          <div className="home-note">
            <div className="home-content1">
              <main className="home-main1">
                <h2 className="home-heading1">What is phishing?</h2>
                <p className="home-paragraph">
                  <span>
                    Phishing is a fraudulent practice in which an attacker
                    masquerades as a reputable entity or person in an email or
                    other form of communication. Attackers commonly use phishing
                    emails to distribute malicious links or attachments that can
                    extract login credentials, account numbers, and other
                    personal information from victims.
                  </span>
                  <br />
                </p>
              </main>
              <div className="home-explore-more">
                <p className="home-text11">Explore more</p>
                <svg viewBox="0 0 1024 1024" className="home-icon05">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
            <div className="home-image04">
              <img alt="image" src={PhishingFoto} className="home-image05" />
            </div>
          </div>
          <div className="home-stats">
            <div className="home-stat">
              <span className="home-caption">65%</span>
              <span className="home-description">
                <span>Phishing attacks has increased in the last year</span>
                <span></span>
              </span>
            </div>
            <div className="home-stat1">
              <span className="home-caption1">1 of 99</span>
              <span className="home-description01">
                <span>Emails are phishing</span>
                <span></span>
              </span>
            </div>
            <div className="home-stat2">
              <span className="home-caption2">91%</span>
              <span className="home-description02">
                Cyber attacks starts with emails
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="home-section2">
        <header className="home-header1">
          <header className="home-left">
            <span className="home-section3 section-head">Features</span>
            <h2 className="section-heading">The solution</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph1 section-description">
              Netisght is a phishing extension for your browser that detects and
              blocks pages that try to steal your personal information. Here we
              specify the main features and functionality.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <section className="home-card">
            <div className="home-icon06">
              <img alt="image" src={IconDomain} className="home-icon07" />
            </div>
            <main className="home-content4">
              <h1 className="home-header2">Page Analysis</h1>
              <p className="home-description08">
                Our extension's page analysis feature quickly scans the webpage
                you're visiting to identify potential phishing threats,
                malicious scripts, and suspicious activity.
                <br />
                <br />
              </p>
            </main>
          </section>
          <section className="home-card1">
            <div className="home-icon08">
              <img alt="image" src={IconBloqued} className="home-icon09" />
            </div>
            <main className="home-content5">
              <h1 className="home-header3">Page Blocking</h1>
              <p className="home-description09">
                If our page analysis detects a potential threat, our extension
                can automatically block the page to prevent you from falling
                victim to phishing attacks or malware infections
              </p>
            </main>
          </section>
          <section className="home-card2">
            <div className="home-icon10">
              <img alt="image" src={IconControlPanel} className="home-icon11" />
            </div>
            <main className="home-content6">
              <h1 className="home-header4">User Dashboard</h1>
              <p className="home-description10">
                The user dashboard is your central hub for tracking all scans
                made by our extension. Here, you can view a detailed history of
                all websites analyzed, including the results of each scan.
              </p>
            </main>
          </section>
        </main>
      </section>
      <section id="about-me" className="home-section4">
        <header className="home-header5">
          <span className="home-section5 section-head">About Me</span>
          <h2 className="home-heading5 section-heading">
            Helping people navigate safely
          </h2>
          <div className="home-container09">
            <p className="home-paragraph2">
              <span>
                My name is Alejo and im a passionate advocate for a safer
                internet. For my final career project i decided to create a
                game-changing Chrome extension that shields users from the
                ever-growing threat of phishing attacks. With a vision to
                empower individuals to browse the web with confidence, I'm
                committed to making a meaningful impact in the fight against
                cybercrime.
              </span>
              <br />
            </p>
          </div>
          <div className="home-container10">
            <a href="https://github.com/AlejoAmillano" target="_blank">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
              </svg>
            </a>
            <a
              href="https://stackoverflow.com/users/19951004/ale26"
              target="_blank"
            >
              <svg viewBox="0 0 384 512" className="home-icon14">
                <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alejoamillano@gmail.com"
              target="_blank"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
              </svg>
            </a>
          </div>
        </header>
      </section>
      <section id="FAQ" className="home-section6">
        <header className="home-header6">
          <span className="home-section7 section-head">FAQ</span>
          <h2 className="home-heading6 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <div className="home-accordion1">
            <div
              data-role="accordion-container"
              className="home-element accordion-element"
            >
              <div className="home-details5">
                <span className="home-text24">
                  How does this Chrome extension prevent phishing attacks?
                </span>
                <span data-role="accordion-content" className="home-text25">
                  This Chrome extension uses the Google Safe Browsing API to
                  detect and block phishing websites. It checks the URLs of
                  websites you visit against a constantly updated list of known
                  phishing sites, and it also uses machine learning algorithms
                  to identify new phishing sites.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion-element"
            >
              <div className="home-details6">
                <span className="home-text26">
                  What should I do if I encounter a phishing site while using
                  this extension?
                </span>
                <span data-role="accordion-content" className="home-text27">
                  If you encounter a phishing site while using this extension,
                  please report it to us so that we can add it to our list of
                  known phishing sites.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion-element"
            >
              <div className="home-details7">
                <span className="home-text28">
                  Can I customize the settings of this extension?
                </span>
                <span data-role="accordion-content" className="home-text29">
                  Yes, you can customize the settings of this extension to suit
                  your needs. For example, you can choose to receive
                  notifications when the extension blocks a phishing site, or
                  you can adjust the sensitivity of the phishing detection
                  algorithm.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion-element"
            >
              <div className="home-details8">
                <span className="home-text30">
                  Will this extension slow down my browser?
                </span>
                <span data-role="accordion-content" className="home-text31">
                  No, this extension is designed to be lightweight and should
                  not have a noticeable impact on your browser's performance.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section id="download" className="home-section8">
        <main className="home-content7">
          <header className="home-header7">
            <h2 className="home-heading7 section-heading">
              Choose where to install Netsight!
            </h2>
            <div className="home-buttons1">
              <div className="home-chrome button">
                <svg
                  viewBox="0 0 1079.4422857142856 1024"
                  className="home-icon28"
                >
                  <path d="M510.286 0c87.429-0.571 176.571 21.714 257.714 68.571 89.714 52 157.714 126.857 201.143 212.571l-424-22.286c-120-6.857-234.286 60.571-273.714 173.714l-157.714-242.286c98.286-122.286 245.714-189.714 396.571-190.286zM83.429 231.429l192.571 378.857c54.286 106.857 169.143 172 288 149.714l-131.429 257.714c-245.143-37.714-432.571-249.714-432.571-505.714 0-103.429 30.857-200 83.429-280.571zM989.714 328c89.714 230.857 0 499.429-221.714 627.429-89.714 52-188.571 73.143-284.571 68l231.429-356c65.714-101.143 64.571-233.143-13.714-324.571zM512 339.429c95.429 0 172.571 77.143 172.571 172.571s-77.143 172.571-172.571 172.571-172.571-77.143-172.571-172.571 77.143-172.571 172.571-172.571z"></path>
                </svg>
                <span className="home-text32">Download for Chrome</span>
              </div>
              <div className="home-ios button">
                <svg
                  viewBox="0 0 796.0137142857142 1024"
                  className="home-icon30"
                >
                  <path d="M796 694.286c-14.286 45.143-37.143 93.143-70.286 142.857-49.143 74.857-98.286 112-146.857 112-19.429 0-45.714-6.286-80-18.286-33.714-12.571-62.857-18.286-86.286-18.286-22.857 0-50.286 6.286-81.143 18.857-31.429 13.143-56.571 19.429-75.429 19.429-58.857 0-115.429-49.714-172-148-55.429-98.286-84-193.714-84-287.429 0-87.429 21.714-158.286 64.571-213.714 42.857-54.857 96.571-82.286 162.286-82.286 28 0 61.143 5.714 101.143 17.143 39.429 11.429 65.714 17.143 78.857 17.143 16.571 0 44-6.286 81.714-19.429 37.714-12.571 70.857-19.429 98.857-19.429 45.714 0 86.286 12.571 121.714 37.143 20 13.714 40 33.143 59.429 57.143-29.714 25.143-51.429 47.429-65.143 67.429-24.571 35.429-37.143 74.857-37.143 118.286 0 46.857 13.143 89.714 39.429 127.429s56.571 61.714 90.286 72zM581.143 24c0 23.429-5.714 49.714-16.571 77.714-11.429 28.571-29.143 54.857-53.143 78.857-20.571 20.571-41.143 34.286-61.714 41.143-13.143 4-32.571 7.429-59.429 9.714 1.143-56.571 16-105.714 44.571-146.857s76.571-69.143 142.857-84.571c1.143 5.143 2.286 9.143 2.857 12.571 0 4 0.571 7.429 0.571 11.429z"></path>
                </svg>
                <span className="home-text33">Download for iOS</span>
              </div>
              <div className="home-android button">
                <svg viewBox="0 0 1024 1024" className="home-icon32">
                  <path d="M640 214v-44h-42v44h42zM426 214v-44h-42v44h42zM662 92q106 76 106 206h-512q0-54 30-114t74-92l-56-56q-16-16 0-30t30 0l64 64q52-28 114-28 52 0 112 28l64-64q16-14 30 0t0 30zM874 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM150 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM256 768v-426h512v426q0 18-12 30t-30 12h-44v150q0 28-19 46t-45 18-45-18-19-46v-150h-84v150q0 28-19 46t-45 18-45-18-19-46v-150h-44q-18 0-30-12t-12-30z"></path>
                </svg>
                <span className="home-text34">Download for Android</span>
              </div>
            </div>
          </header>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content8">
          <div className="home-container11">
            <section className="home-copyright">
              <span className="home-text35">© 2024. All Rights Reserved.</span>
            </section>
          </div>
          <div className="home-container12">
            <img
              alt="Planical7012"
              src={Logo}
              className="home-branding-logo1"
            />
          </div>
          <div className="home-container13">
            <a href="https://github.com/AlejoAmillano" target="_blank">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon34">
                <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
              </svg>
            </a>
            <a
              href="https://stackoverflow.com/users/19951004/ale26"
              target="_blank"
            >
              <svg viewBox="0 0 384 512" className="home-icon36">
                <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alejoamillano@gmail.com"
              target="_blank"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon38">
                <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div>
        <div className="home-container12" ref={homeContainer12Ref}></div>
      </div>
    </>
  )
}

export default Home
