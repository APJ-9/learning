import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'You hit me'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Hit Me</button>
            </div>
        )
    }
}

export default Message