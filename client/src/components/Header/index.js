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
  <header className=" bg-cyan-600 p-4">
   <div className="" id="title">
    <div className="flex justify-start text-4xl">
     <h1><Link to="/">Heights Handyman</Link> </h1>
     </div>
   </div>
   <div className='flex justify-end space-x-4 mb-4' id="navbar">
    <div className=""><Link to="/about"><img src={about}/></Link></div>
    <div className=''><Link to="/contact"><img src={services}/></Link></div>
    <div className=''><Link to="/services"><img src={contact}/></Link></div>
   </div>
  </header>
 )
}

export default Header