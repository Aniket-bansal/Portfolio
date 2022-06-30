import React from 'react'
import '../App.css'
import profilelogo from '../Images/Aniket profile photo.png'
import {FaCss3, FaGithubAlt, FaHtml5, FaJsSquare, FaReact} from 'react-icons/fa'
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
            <h3>Skills</h3>
            <div className="skill">
                 <div><span style={{marginTop:"3px"}}><i class="fa-solid fa-c"></i></span><h4>C++</h4></div>
                 <div><span><FaHtml5 /></span><h4>Html</h4></div>
                 <div><span><FaCss3 /></span><h4>Css</h4></div>
                 <div><span><FaJsSquare /></span><h4>Javascript</h4></div>
                 <div><span><FaReact /></span><h4>ReactJs</h4></div>
                 <div><span><FaGithubAlt/></span><h4>Git</h4></div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Info