import React from 'react'





export default function Footer() {
  return (<>
      
    <div className='footer'>

      <div className='groups d-flex justify-content-around'>


        <div>
        <h2 className='text-white'>LOCATION</h2>
        <p className='text-white'>2215 John Daniel Drive</p>
        <p className='mt-2 text-white'>Clark, MO 65243</p>
        </div>




        <div>
          <h2 className='text-white'>AROUND THE WEB</h2>
          <i className='icon  fa-brands fa-facebook text-white mx-2'></i>
          <i className='icon fa-brands fa fa-twitter text-white mx-2'></i>
          <i className='icon fa-brands fa fa-linkedin text-white mx-2'></i>
          <i className='icon fa-solid fa fa-globe text-white mx-2'></i>
        </div>


        <div>

          <h2 className='text-white'>ABOUT FREELANCER</h2>
          <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme <br/> created by Route</p>

        </div>
    

      </div>


      <div className='copyright'>

        <p className='text-white'>Copyright © Your Website 2021</p>

      </div>

    </div>

    </>
  )
}
