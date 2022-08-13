import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Info from '../Pages/Info'
import Projects from '../Pages/Projects'
import TechSkills from '../Pages/TechSkills'

const MainRoutes = () => {
    
  return (
  <>
  <Routes>
        <Route to="/" element={<Info/>} />
        <Route to="/skills" element={<TechSkills/>}/>
        <Route to="/projects" element={<Projects/>}/>
        <Route to="/contact" element={<Contact/>}/>
    </Routes>
  </>
  );
}

export default MainRoutes