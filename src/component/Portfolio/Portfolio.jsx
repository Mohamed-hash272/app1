import React from 'react'


import img1 from "../../assets/poert1.png"

import img2 from "../../assets/port2.png"

import img3 from "../../assets/port3.png"

export default function Portfolio() {
  return (<>



      <div className='portfolio'>

        <h1 className='h1-portfo'>PORTFOLIO COMPONENT</h1>
         <div className='stars'>
          <i className='fa brands fa-star'></i>
        </div>

        <div className='images-portfo'>

          <img src={img1} alt="poert1" />

          <img src={img2} alt="port2" />

          <img src={img3} alt="port3" />

        </div>


        <div className='images-portfo2'>

           <img src={img1} alt="poert1" />

          <img src={img2} alt="port2" />

          <img src={img3} alt="port3" />

        </div>

      </div>

    
    </>
  )
}
