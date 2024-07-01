import React, { Component } from 'react'
import Hello from './Hello'
import Timer from './Timer'

let interval
export default class App extends Component {
    constructor(){
        super()
        this.state={
            title:"سلام دوستان  ",
            
        }
    }

  
    render() {
        return (
            <div className="main">
                <Hello title={this.state.title}/>
                <Timer />
            </div>
        )
    }
}
