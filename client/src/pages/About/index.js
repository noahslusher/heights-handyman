import React from 'react'
import Photo from './portrait.jpeg'
import { Link } from 'react-router-dom'


function About() {
 return (
  <div className="">
   <div className="" id="title">
    <h1>About Heights Handyman</h1>
   </div>
   <div className="" id="photo">
    <img src={Photo} alt="photo of Noah Slusher"></img>
   </div>
   <div className="" id="about">
    <p>Heights Handyman is run by its creator, Noah Slusher. We serve the Salt Lake Valley and specialize in small to medium home repairs and projects</p>
   </div>
  </div>
 )
}

export default About