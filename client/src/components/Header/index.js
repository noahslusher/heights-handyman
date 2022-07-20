import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Header() {
 const location = useLocation()
 if (location.pathname === "/") {
  return null
 }
 return (
  <header>
   <div id="title">
    <h1><Link to="/">Heights Handyman</Link> </h1>
   </div>
   <div id="navbar">
    <div><Link to="/about">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    <div><Link to="/services">Services</Link></div>
   </div>
  </header>
 )
}

export default Header