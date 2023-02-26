import React from 'react'
import BgImgComp2 from '../Components/BgImgComp2'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <BgImgComp2 heading='ABOUT' subheading="I'm a Full-Stack Developer"/>
      <Footer/>
    </div>
  )
}

export default About