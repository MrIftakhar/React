import React from 'react'
import Navbar from './Pages/BlogWebsite/Navbar'
import './Pages/BlogWebsite/BlogCSS/Error.css'
function Error() {
  return (
    <div>
      <Navbar/>
        <h1 className='Error'>404</h1>
        <h2 className='Error'>Page Not Found</h2>
    </div>
  )
}

export default Error