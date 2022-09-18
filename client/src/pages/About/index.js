import React from 'react'
import Photo from './portrait.jpeg'
import { Link } from 'react-router-dom'


function About() {
 return (
 <section 
 className='
 flex
 justify-center
 '>
  <div 
  className="
  mt-4
  flex
  flex-col
  items-center
  justify-center
  rounded-lg
  shadow-lg
  w-fit
  ">
   <div 
   className="
   flex 
   justify-center 
   text-4xl 
   m-6
   " id="title">
    <h1>About Heights Handyman</h1>
   </div>
   <div 
   className="
   flex 
   justify-center
   rounded-xl
   border-2
   border-black
   " id="photo"
   >
    <img 
    className="
    h-60 
    sm:h-96 
    rounded-lg
    shadow
    " src={Photo} alt="photo of Noah Slusher"></img>
   </div>
   <div 
   className="
   flex 
   justify-center 
   text-center
   w-1/2 
   mt-6
   pb-4
   " id="about">
    <p>Heights Handyman is run by its creator, Noah Slusher. We serve the Salt Lake Valley and specialize in small to medium home repairs and projects</p>
   </div>
  </div>
  </section>
 )
}

export default About