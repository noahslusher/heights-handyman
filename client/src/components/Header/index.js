import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import about from './about.svg'
import contact from './contact.svg'
import services from './tools.svg'
import hamburger from './hamburger.svg'
import cross from './cross.svg'
import {useState} from 'react'
import './style.css'


function Header() {
  // const location = useLocation()
  // if (location.pathname === "/") {
  //   return null
  // }

  // Hamburger menu functionality
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header
      className=" 
      transparent
      sticky
      top-0
      z-100
        ">
<div className="">
      
      <nav>
        <section className="MOBILE-MENU sticky flex justify-end transparent">
          <div
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div className={isNavOpen ? "hideHamburger" : "showHamburger"}>
            <div className="
            p-2
            z-999">
              <img src={hamburger}></img>
            </div>
          </div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className="
              
              ">
            <div
              className="CROSS-ICON flex justify-end pt-4"
              onClick={() => setIsNavOpen(false)} 
            >
              <img src={cross}/>
               
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex justify-center justify-between w-screen p-4 mt-4"
            onClick={() => setIsNavOpen(false)}>
              <li className="border-b border-gray-400 uppercase">
              <a data-testid="about" href="#about">About Me</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
              <a data-testid="services" href="#services">Services</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
              <a data-testid="contact" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </section>

        {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </nav>
    </div>
      {/* <div
        className="
          flex 
          justify-center
          items-center 
          text-2xl
          pt-2
          ">
        <h1>
          <a data-testid="link" href="/">Heights Handyman</a> 
          </h1>
      </div> */}
      {/* <div
        className='
          flex 
          justify-end 
          space-x-4 
          
          ' id="navbar">
        <div className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            ">
              <a data-testid="about" href="#contact-form"> <img src={about} />
              </a>
            </div>
        <div className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            ">
              <a data-testid="services" href="#services"><img src={services} />
              </a>
              </div>
        <div className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            "><a data-testid="contact" href="#contact"><img src={contact} />
            </a>
            </div>
      </div> */}
    </header>
  )
}

export default Header