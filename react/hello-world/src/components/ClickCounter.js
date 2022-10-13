import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)