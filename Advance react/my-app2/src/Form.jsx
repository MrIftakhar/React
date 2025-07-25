import React, { useState } from 'react';
const Form = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [pass, setpass] = useState("");


    const SubmitInfo = (event) =>{
        setName(event.target.value)
    }
    const SubmitEmail = (event) =>{
        setEmail(event.target.value)
    }
    const SubmitPass = (event) =>{
        setpass(event.target.value)
    }

  const SubmitAllInfo = (e) => {
    console.log("Name is :",name, "Email is:", email, "Password is :", pass)
    e.preventDefault()
  }
  return (
    <div className='container'>
        <h1 className='text-center'>Registation Form</h1>
        <form action="" className='form'onSubmit={SubmitAllInfo}>
            <div className='mb-3'>
                <label htmlFor="">Name:</label>
                <input className='form-control' type="text" name='name' id='name' placeholder='Enter Your Name' required onChange={SubmitInfo} value={name} />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Email:</label>
                <input className='form-control' type="email" name='email' id='email' placeholder='Enter Your Email'  onChange={SubmitEmail} value={email} required />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Password:</label>
                <input className='form-control' type="password" name='password' id='password' placeholder='Enter Your password' value={pass} required onChange={SubmitPass} />
            </div>
            <button className='btn mt-3 btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default Form