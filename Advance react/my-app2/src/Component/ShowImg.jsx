import React, { useEffect, useState } from 'react'

const ShowImg = () => {
    const [showImg, SetImg] = useState(null)
    useEffect(() => {
        setTimeout(()=> {
            fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=> res.json())
        .then((data)=> SetImg(data))
        }, 2000)
    })
  return (
    <div>
        {showImg && <img src={showImg.message} alt="" />}
    </div>
  )
}

export default ShowImg