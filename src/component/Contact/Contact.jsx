import React from 'react'

export default function Contact() {
  return (
    <>

    <div className='contact'>

      <h1 className='h1-portfo'>CONTACT SECTION</h1>
      <div className='stars'>
          <i className='fa brands fa-star'></i>
        </div>

        
        <div className="form-container">
      <div className="input-group">
        <input type="text" required />
        <label>userName</label>
      </div>

      <div className="input-group">
        <input type="number" required />
        <label>userAge</label>
      </div>

      <div className="input-group">
        <input type="email" required />
        <label>userEmail</label>
      </div>

      <div className="input-group">
        <input type="password" required />
        <label>userPassword</label>
      </div>

      <button className="btn">send Message</button>
    </div>

    </div>
      
    </>
  )
}
