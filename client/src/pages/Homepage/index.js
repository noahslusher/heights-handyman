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
    justify-center
    z-10
    relative
    ' id="/"> 
      <video className="
        absolute
        object-cover
        sm:h-full
        h-3/4
        w-full
        sm:top-0
        sm:left-0
        z-0
        " src={background} autoPlay loop muted  id="bg-video"/>
      {/* <div className='
        absolute
        top-0
        left-0
        sm:w-full
        sm:h-full
        bg-white
        mix-blend-overlay
        '>
        </div> */}
      <div
        className="
          flex 
          justify-center 
          pt-10 
          text-4xl 
          sm:text-6xl 
          sm:absolute
          sm:bottom-80
          sm:left-20
          " id="title">
        <div
          className="
            sm:bg-white/50 
            bg-white
            p-4 
            rounded-md 
            z-20
            flex
            justify-center
            ">Heights Handyman</div>
      </div>
      <div
        className="
          flex
          justify-center
          sm:absolute
          sm:bottom-56
          sm:left-60
          sm:text-2xl 
          text-lg 
          text-center
          mx-10
          
          " id="subtitle
          ">
        <div
          className="
            sm:bg-white/50 
            bg-white
            rounded-md 
            p-2
            z-20
            mt-10
            ">Your Home is One Step Closer to Realizing Its Full Potential</div>
      </div>
      {/* Begin homepage nav bar */}


      {/* <div
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



      </div> */}
    </div>
  )
}

export default Homepage