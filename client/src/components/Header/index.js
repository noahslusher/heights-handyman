import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import about from './about.svg'
import contact from './contact.svg'
import services from './tools.svg'


function Header() {
  // const location = useLocation()
  // if (location.pathname === "/") {
  //   return null
  // }
  return (
    <header
      className=" 
      transparent
        ">
<div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div>
            <div
              className="absolute top-0 right-0 px-8 py-8"
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
      <div
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
      </div>
      <div
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
      </div>
    </header>
  )
}

export default Header