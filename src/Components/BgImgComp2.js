import React from 'react'
import '../styles/bgImg2.css'

function BgImgComp2({heading,subheading}) {
  return (
    <div className='BgImgComp2'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    </div>
  )
}

export default BgImgComp2