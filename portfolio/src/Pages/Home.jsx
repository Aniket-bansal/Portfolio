import React from 'react'
import '../Styles/Home.css'
import profile from '../Images/Aniket_Bansal_Profile_Photo.JPG'
const Home = () => {
  return (
    <div className="mainContainer">
        <div className="text">
          <div className="static-text">I'm </div>
          <ul className="dynamic-text">
            <li><span>Aniket Bansal</span></li>
            <li><span>a Fresher</span></li>
            <li><span>a Full Stack Developer</span></li>
          </ul>
        </div>
        <div className="profile-photo">
          <div><img src={profile} alt="profile_photo" /></div>
        </div>

    </div>
  )
}

export default Home ;


