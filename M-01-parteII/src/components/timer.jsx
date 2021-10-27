import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
       time: 0
    }
    this.timer
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate ')
    return false
  }

  componentWillUpdate (nextProps, nexState) {
    // console.log('componentWillUpdate ', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, thií.props )
  }

  componentDidMount() {
    this.timer = setInterval(()=> {this.setState({time : this.state.time + 1}) }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render(){
    return <div> Timer: {this.state.time}</div>
  }
}

export default Timer

