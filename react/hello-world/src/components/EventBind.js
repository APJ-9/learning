import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
        // used in method-3
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //function is used for methods 1 2 & 3
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }
    //Approch 3 is good given in the documentation
    clickHandler = () => {
        // used in method 4
        this.setState({
            message: 'Goodbye!!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message} </div>
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}
                {/* <button onClick={() => this.clickHandler()}> Click </button> */}
                {/* <button onClick={this.clickHandler}> Click </button>  */}
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default EventBind