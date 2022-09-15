import React from 'react'
import Photo from './portrait.jpeg'
import { Link } from 'react-router-dom'


function About() {
 return (
  <div className="">
   <div className="flex justify-center text-4xl mb-6" id="title">
    <h1>About Heights Handyman</h1>
   </div>
   <div className="flex justify-center" id="photo">
    <img className="h-60 sm:h-96 rounded-lg" src={Photo} alt="photo of Noah Slusher"></img>
   </div>
   <div className="flex justify-center w-1/2 mt-6" id="about">
    <p className='flex justify-center'>Heights Handyman is run by its creator, Noah Slusher. We serve the Salt Lake Valley and specialize in small to medium home repairs and projects</p>
   </div>
  </div>
 )
}

export default About