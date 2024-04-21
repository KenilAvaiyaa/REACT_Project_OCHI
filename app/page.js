"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eye from './Components/Eye'
import Projects from './Components/Projects'
import Clientreview from './Components/Clientreview'
import Startproject from './Components/Startproject'
import Footer from './Components/Footer' 
import LocomotiveScroll from 'locomotive-scroll';


const page = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' w-full min-h-scree text-main-text text-[#212121] bg-body overflow-hidden'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Projects />
      <Clientreview />
      <Startproject />
      <Footer />
    </div>
  )
}

export default page