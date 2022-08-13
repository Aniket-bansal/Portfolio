import { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Info from './Pages/Info';
import Projects from './Pages/Projects';
import TechSkills from './Pages/TechSkills';


function App() {
  const infoRef=useRef(null)
  const skillRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
    
  return (
   <>
     <Navbar projectsRef={projectsRef} infoRef={infoRef} skillRef={skillRef} contactRef={contactRef} />
    <div className="App">
    <div className="item-container"  ref={infoRef}><Info /></div> 
    <div className="item-container" ref={skillRef}><TechSkills /></div> 
    <div className="item-container" ref={projectsRef}><Projects  /></div> 
    <div className="item-container" ref={contactRef}><Contact  /></div> 
    </div>
   </>
  );
}

export default App;
