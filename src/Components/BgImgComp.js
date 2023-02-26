import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/homebg.jpg'
import '../styles/bgImg.css'

function BgImgComp() {
  return (
    <div className='main'>
    <div className='mask'>
    <img src={bgImg} className='bg-Img'></img>
    </div>
    <div className='home-content'>
    <p>Hi, I'm a Web Developer </p>
    <h1>React Developer.</h1>
    <div>
        <Link to='/projects' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default BgImgComp