import React, { Component } from 'react'

class ClassTimer extends Component {
    intervel
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.intervel = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervel)
    }

    render() {
        return (
            <div>
                Class -Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.intervel)}>Clear Timer</button>
            </div>
        )
    }
}

export default ClassTimer