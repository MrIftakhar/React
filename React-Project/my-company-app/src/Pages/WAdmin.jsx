import React, { Component } from 'react'
import Filter from './Filter';

export default class WAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            YourAge:false,
        }
    }
  render() {
    let me
    if(this.state.YourAge){
        me = "Wlcome";
    }else {
        me = <Filter/>
    }
    return (
      <div>{me}</div>
    )
  }
}
