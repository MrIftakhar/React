import React, { Component } from 'react'

export default class Input extends Component {
    state = {
        CompanyName:"",
        EmployeeName:"",
        Post:"",
        JoiningDate:"",
        JoiningTime:"",
        About:"",
        gender:"",
        checkbox:false,

    }
    FormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    CheckBoxHandler = (event) => {
        this.setState({
            checkbox: event.target.checked
        })
    }
  render() { 
    const {CompanyName,EmployeeName,Post,JoiningDate,JoiningTime,About,checkbox} = this.state
    return (
      <div className='container'>
        <input type="text" name='CompanyName' placeholder='Company Name' className='form-control' onChange={this.FormChange} value={CompanyName} />
        <input type="text" name='EmployeeName' placeholder='Employee Name' className='form-control' onChange={this.FormChange} value={EmployeeName} />

        <select name="Post" onChange={this.FormChange} className="form-control" value={Post} >
            <option value="Select">Select</option>
            <option value="Programer">Programer</option>
            <option value="Developer">Developer</option>
            <option value="Marketing">Marketing</option>
            <option value="Intern">Intern</option>
        </select>
        <input type="date" name="JoiningDate" onChange={this.FormChange} className="form-control" value={JoiningDate} />
        <input type="time" name="JoiningTime" onChange={this.FormChange} className="form-control" value={JoiningTime} />
        <textarea name="About" onChange={this.FormChange} placeholder="Tell me about Your Self" 
        className="form-control" value={About} >

        </textarea>
        <div>
            <input type="radio" value="Male" name="gender" onChange={this.FormChange} />
            <label htmlFor="gender">Male</label>
            <input type="radio" value="Female" name="gender" onChange={this.FormChange} />
            <label htmlFor="gender">Female</label>
        </div>
        <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.CheckBoxHandler} />
        <label htmlFor="checkbox">I Agree & Continue</label>
        <br />

        <button className='btn btn-primary' onClick={()=> console.log(this.state)}>
            Submit
        </button>
      </div>
    )
  }
}
