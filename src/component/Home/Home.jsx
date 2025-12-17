import React from 'react'

import img from "../../assets/avataaars.svg"

export default function Home() {
  return (
    <>

    <div className='home'>
      <div className='imag'>
        <img src={img} alt="avataaars" />
        
      </div>
        <h2 className='head'>START FRAMEWORK</h2>
        <div className='star'>
          <i className='fa brands fa-star'></i>
        </div>
        <p className='parag'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    
     
    </>
  )
}
