import React from 'react'


const mainContainer={
  border:"1px solid red",
  height:"100%",
  width:"100%",
  margin:"auto",
  backgroundColor:"#fff",
  borderRadius:"20px",
  marginTop:"170px"
}
const Info = ({reference}) => {
  return (
    <div ref={reference} style={mainContainer}>Info</div>
  )
}

export default Info