import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
 return (
  <div class="" id="">
   <div class="" id="title">
    Heights Handyman
   </div>
   <div class="" id="subtitle">
    Your Home is One Step Closer to Realizing Its Full Potential
   </div>
   <div class="" id="nav">
    <div><Link to="/about">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    <div><Link to="/services">Services</Link></div>
   </div>
  </div>
 )
}

export default Homepage