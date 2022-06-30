import React from 'react'
import '../App.css'
import profilelogo from '../Images/Aniket profile photo.png'
const Info = () => {
  return (
    <div className="container">
     <div>
       <img src={profilelogo} alt="notFound" />
     </div>
     <div>
        <h1>Aniket Bansal</h1>
        <h3>Full Stack Developer</h3>
        <div className="tech">
            Skills
        </div>
     </div>
    </div>
  )
}

export default Info