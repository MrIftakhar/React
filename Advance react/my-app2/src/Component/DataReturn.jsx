import React from 'react'

const DataReturn= (props)=> {
  return (
    <div style={{border:"1px solid blue", margin:"10px", padding:"10px"}}>
        <p>Id: {props.id}</p>
        <p>UserName: {props.username}</p>
        <p>Name: {props.name}</p> 
        <p>Email: {props.email}</p> 
        <p>Phone: {props.phone}</p>
        <p>Website: {props.website}</p>
        <br />
    </div>
  )
}

export default DataReturn;