import React from 'react'
import { Link } from 'react-router-dom'


function Services() {
 return(
  <div 
  className="
  flex
  flex-col
  items-center
  justify-center
  p-4" id="title">
   <div 
   className='
   flex
   justify-center
   p-4
   text-4xl'>
   <h1>What We Offer</h1>
   </div>
   <div 
   className="
   text-center
   flex
   justify-center
   p-4
   text-2xl
   " id="about">
    <p>We offer small to medium home repairs and upgrades.</p>
   </div>
  </div>
 )
}

export default Services