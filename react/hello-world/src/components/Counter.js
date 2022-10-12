import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('CallBack value ', this.state.count) })
        //setState have 2 parameter if you want to execute some code don't place after the setState property place them in the 2nd parameter

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)
        //synconrous console
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()} >Increment</button>
            </div>
        )
    }
}

export default Counter