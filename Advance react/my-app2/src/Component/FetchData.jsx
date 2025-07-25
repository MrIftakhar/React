import React, { useEffect, useState } from 'react'
import DataReturn from './DataReturn'

const FetchData = () => {
    const [SaveData, Setdata] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json() )
        .then((data)=> Setdata(data))
    }, [])
  return (
    <div>
        <div className='card'>
            {SaveData &&
               SaveData.map((data)=> {

                return <DataReturn name={data.name} email={data.email} id={data.id} username={data.username} phone={data.phone} website={data.website}  />
               }) 
            }
        </div>
    </div>
  )
}
export default FetchData;