import React, {useState} from 'react';

const AppHome = () => {
    const [Toggler, SetToggler] = useState(true)
  return (
    <div>
        <button className='btn btn-primary'onClick={()=>{
            SetToggler(!Toggler)
        }}>
            {Toggler ? "Hide": "Show"}
        </button>
        {Toggler && 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus aut quae enim ut expedita minus nulla quis modi reiciendis!</p>
        }
    </div>
  )
}

export default AppHome
