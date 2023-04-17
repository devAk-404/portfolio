import React from 'react'
import BgImgComp2 from '../Components/BgImgComp2'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import PricingCard from '../Components/PricingCard'
import WorkCard from '../Components/WorkCard'


function Projects() {
  return (
    <div>
      <Navbar/>
      <BgImgComp2 heading='PROJECTS.' subheading='some of my work'></BgImgComp2>
      <WorkCard/>
      <PricingCard></PricingCard>
      <Footer/>
    </div>
  )
}

export default Projects