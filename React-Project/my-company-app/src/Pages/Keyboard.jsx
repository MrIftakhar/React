import React from 'react'

function Keyboard() {
    const OnKeyDown = () =>{
        console.log("key press down")
    }
    const OnKeyUp = () =>{
        console.log("key press Up")
    }
    const OnKeyPress = () =>{
        console.log("key pressed")
    }
  return (
    <div>
        <h1>Keyboard Event</h1>
        <input type="text" onKeyDown={OnKeyDown} />
        <input type="text" onKeyUp={OnKeyUp} />
        <input type="text" onKeyPress={OnKeyPress} />
    </div>
  )
}

export default Keyboard