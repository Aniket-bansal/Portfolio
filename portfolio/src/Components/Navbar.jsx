import React, { useRef } from 'react'
import logo from '../Images/logo.png'
import {NavLink} from 'react-router-dom'
import  '../Styles/Navbar.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

// NavLinks
const baseStyle = {
  color: "black",
  textDecoration: "none"
};

const activeStyle = {
  color: "red",
  textDecoration: "none"
};

const Navbar = ({projectsRef,infoRef,skillRef,contactRef}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleScroll=(ref)=>{
     window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
     })
  }
  return (
    <div className="nav-container">
        <div className="nav-Image">
           <NavLink style={baseStyle} to={"/"}>Aniket Bansal </NavLink>
        </div>
        <div className="nav-Links">
      <ul>
      <NavLink className="links" onClick={()=>{handleScroll(infoRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/'}
        >About Me</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(skillRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/skills'}
        >Technical Skills</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(projectsRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/projects'}
        >Projects</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(contactRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/contact'}
        >Contact Me</NavLink>
      </ul>

      <i className="fa-solid fa-bars" onClick={onOpen}></i>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent
          className="modalcontent"
          >
            
            <ModalBody className="modalBody">
        <ul>
        <NavLink className="links" onClick={()=>{handleScroll(infoRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/'}
        >About Me</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(skillRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/skills'}
        >Technical Skills</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(projectsRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/projects'}
        >Projects</NavLink>
        <NavLink className="links" onClick={()=>{handleScroll(contactRef.current)}}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={'/contact'}
        >Contact Me</NavLink>
        </ul>
            </ModalBody>
          </ModalContent>
        </Modal>  
    </div>
    </div>
  )
}

export default Navbar