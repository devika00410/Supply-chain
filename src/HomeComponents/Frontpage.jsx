import React from 'react'
import "./Frontpage.css"
function Frontpage() {
  return (
    <div className='front'>
        <video src='https://thumbs.dreamstime.com/videothumb_large33130/331300323.webm' className='cargo'  // video URL
        autoPlay
        loop
        muted/>
    <div className="white-overlay"></div>
    <div className="hero-content">
        <h2 className='head'>Seamless Supply Chain Connections</h2>
        <h3 className='subhead'>Connecting businesses with trusted logistics providers for faster, smarter operations.</h3>
        <button className= 'cta'>Get Started</button>
             <button className= 'cta'>Get Started</button>
    </div>
     </div>
  )
}

export default Frontpage