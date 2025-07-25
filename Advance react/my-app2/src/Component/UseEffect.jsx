import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [calculation, setcalculation] = useState(0);
    useEffect(() => {
        document.title = `Chat ${count}`
        setcalculation(()=>count * 2 )
    }, [count])
  return (
    <div>
        <p>Someone Sent You {count} Notification</p>
        <p>calculation: {calculation}</p>
        <button className='btn btn-primary' onClick={()=>setCount ((cal)=> cal + 1
        )}>
            Count Me
        </button>
    </div>
  );
}

export default UseEffect;
