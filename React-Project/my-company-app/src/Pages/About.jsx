
// import React, { Component } from 'react'

// export default class About extends Component {
//   render() {
//     return (
//       <>
//                 <h1>About Page</h1>
//             </>
//     )
//   }
// }
import React, { Component } from 'react'

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "Ifty",
      age : 25,
      prof : "Front end Developer",
      
    }
  }
  changeValue(a){
    this.setState(
      {
        prof : "Back end Developer"
      }
    )
  }
  ChangeMind = this.changeValue.bind(this, this.a)
  render() {
    return (
      <div>
        <h1>My profession is {this.state.prof}.</h1>
        <button onClick={this.ChangeMind}>Change Profession</button>
      </div>
    )
  }
}
export default About;


