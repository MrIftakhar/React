import React from 'react'
import "./Style.css"
import PageStyle from "./Style.module.css";
function Style() {
    const ElementOne = {
        color:"red", 
        backgroundColor:"greenyellow", 
        textAlign:"center"
    };
  return (
    <div>
        <h1 style={ElementOne}>First Style</h1>
        <h2 className='body'>Welcome</h2>
        <h2 className={PageStyle.page}> 1st page</h2>
    </div>
  )
}

export default Style