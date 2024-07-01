import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
          time: new Date().toLocaleTimeString()
        }
    
      }
      funTimer() {
        setInterval(() => {
          this.setState({
            time: new Date().toLocaleTimeString()
          })
        }, 1000)
    
      }
  render() {
    this.funTimer()
    return (
        <h2>it is {this.state.time} </h2>
    )
  }
}
