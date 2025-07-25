import React from 'react'

function Clipboard() {
    const CopyText = () => {
        alert("Text Copied")
    }
    const CutText = () => {
        alert("Text Cut")
    }
    const PasteText = () => {
        alert("Text Pasted")
    }
  return (
    <div>
        <p onCopy={CopyText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nam maxime! Libero ipsum itaque obcaecati deleniti blanditiis deserunt hic impedit! Rem, harum nulla doloremque numquam sed eveniet esse sequi debitis.</p>
        <h1 onCut={CutText}>Lorem ipsum dolor sit amet.</h1>
        <input type="text" onPaste={PasteText} />
    </div>
  )
}

export default Clipboard

