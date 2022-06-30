import React from 'react'
import logo from '../Images/logo.png'
const Navbar = () => {
  return (
    <div className="nav-container">
        <div>
           <img src={logo} alt="Not Found!"/> 
           
        </div>
        <div>
            <button>home</button>
          <button>Contact</button>
          <button>Skillset</button>
          <button>Resume</button>
          <button>Project</button>
          
        </div>

    </div>
  )
}

export default Navbar