import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
       time: 0
    }
  }
  render(){
    return <div> Timer: {this.state.time}</div>
  }
}

export default Timer