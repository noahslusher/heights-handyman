import React from 'react'
import Photo from './portrait.jpeg'
import { Link } from 'react-router-dom'


function About() {
 return (
  <div class="">
   <div class="" id="title">
    <h1>About Heights Handyman</h1>
   </div>
   <div class="" id="">
    <img src={Photo} alt="photo of Noah Slusher"></img>
   </div>
   <div class="" id="">
    <p>Heights Handyman is run by its creator, Noah Slusher. We serve the Salt Lake Valley and specialize in small to medium home repairs and projects</p>
   </div>
  </div>
 )
}

export default About