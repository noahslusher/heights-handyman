import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import about from './about.svg'
import contact from './contact.svg'
import services from './tools.svg'


function Header() {
  const location = useLocation()
  if (location.pathname === "/") {
    return null
  }
  return (
    <header
      className=" 
        bg-sky-600 
        p-2
        border-b-2 
        border-black
        ">

      <div
        className="
          flex 
          justify-center
          items-center 
          text-6xl
          ">
        <h1><Link to="/">Heights Handyman</Link> </h1>
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
            "><Link to="/about"><img src={about} /></Link></div>
        <div className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            "><Link to="/services"><img src={services} /></Link></div>
        <div className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            "><Link to="/contact"><img src={contact} /></Link></div>
      </div>
    </header>
  )
}

export default Header