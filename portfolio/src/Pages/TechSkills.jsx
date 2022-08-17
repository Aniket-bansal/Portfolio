import React from 'react'
import '../Styles/TechSkills.css'
import icon from '../Images/techSkillIcon.png'
const TechSkills = () => {
  return (
    <div className="tech-mainContainer">
      <div className="skills"><h2>Technical Skills &nbsp; </h2><img src={icon} width="80px"  alt="language_Icon" /></div>
      <div className="skill-icons">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="100px" alt="language_Icon" />
        <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="100px" alt="language_Icon" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="100px" alt="language_Icon" />
      </div>
    </div>
  )
}

export default TechSkills