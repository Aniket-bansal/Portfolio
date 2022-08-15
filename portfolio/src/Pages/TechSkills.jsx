import React from 'react'

const mainContainer={
  height:"100%",
  width:"100%",
  margin:"auto",
  backgroundColor:"#fff",
  borderRadius:"20px",
  marginTop:"150px",
  boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
}
const TechSkills = ({reference}) => {
  return (
    <div ref={reference} style={mainContainer}>techSkills</div>
  )
}

export default TechSkills