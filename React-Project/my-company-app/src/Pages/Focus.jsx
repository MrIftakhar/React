import React from 'react'

function Focus() {
  const FocusText = () => {
    console.log("Focus in Input")
  }
  const BlurText = () => {
    console.log("Blur in Input")
  }
  return (
    <div>
      <h1>Focus Event</h1>

      <input type="text" onFocus={FocusText} />
      <input type="text" onBlur={BlurText}/>
    </div>
  )
}

export default Focus