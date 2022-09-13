import React from 'react'
import { Link } from 'react-router-dom'
import background from './background.jpg'
import about from './about.svg'
import contact from './contact.svg'
import tools from './tools.svg'

function Homepage() {
 return (
  <div className="bg-cover h-screen" id="" style={{backgroundImage: `url(${background})`}}>
   <div className="flex justify-center py-10 text-3xl sm:text-6xl" id="title">
    Heights Handyman
   </div>
   <div className="flex justify-center text-xl sm:text-2xl" id="subtitle">
    Your Home is One Step Closer to Realizing Its Full Potential
   </div>
   {/* Begin homepage nav bar */}
   <div className="flex justify-center" id="nav">
    
    <div className="p-2">
     <Link to="/about">
      <div className="flex"><img src={about}/> About</div></Link></div>
    
    <div className="p-2">
     <Link to="/contact">
      <div className="flex"><img src={contact}/> Contact</div></Link></div>
    
    
    <div className="p-2">
     <Link to="/services">
      <div className="flex"><img src={tools}/> Services</div></Link></div>
   </div>
  </div>
 )
}

export default Homepage