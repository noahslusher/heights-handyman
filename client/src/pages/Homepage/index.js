import React from 'react'
import { Link } from 'react-router-dom'
import background from './background.mp4'
import about from './about.svg'
import contact from './contact.svg'
import services from './tools.svg'

function Homepage() {
  return (
    <div className='
    flex
    flex-col
    flex-wrap
    w-screen
    h-screen
    z-10
    '> 
      <video className="
        absolute
        object-cover
        h-full
        w-full
        top-0
        left-0
        " id="" src={background} autoPlay loop muted  id="bg-video"/>
      <div className='
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-sky-600
        mix-blend-overlay
        '>
        </div>
      <div
        className="
          flex 
          justify-center 
          pt-10 
          text-3xl 
          sm:text-6xl 
          " id="title">
        <div
          className="
            bg-white/50 
            p-4 
            rounded-md 
            z-20
            ">Heights Handyman</div>
      </div>
      <div
        className="
          flex 
          justify-center 
          text-xl 
          sm:text-2xl 
          pt-4
          " id="subtitle
          ">
        <div
          className="
            bg-white/50 
            rounded-md 
            p-2
            z-20
            ">Your Home is One Step Closer to Realizing Its Full Potential</div>
      </div>
      {/* Begin homepage nav bar */}


      <div
        className="
          flex 
          justify-center 
          pt-16 
          text-4xl 
          space-x-6
          z-20
          " id="nav">
        <div className=""></div>

        <div
          className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            ">
          <Link to="/about">
            <div
              className="
                flex
                "><img src={about} /> About</div></Link></div>

        <div
          className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            ">
          <Link to="/services">
            <div
              className="
                flex
                "><img src={services} /> Services</div></Link></div>

        <div
          className="
            p-2 
            hover:bg-white/50 
            hover:rounded-md
            ">
          <Link to="/contact">
            <div
              className="
              flex
              "><img src={contact} /> Contact</div></Link></div>



      </div>
    </div>
  )
}

export default Homepage