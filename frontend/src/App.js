import React, { Component } from 'react'
import Hello from './Hello'
import Timer from './Timer'

export default class App extends Component {
    render() {
        return (
            <>
                <Hello />
                <Timer />
            </>
        )
    }
}
