import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Akhil'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDeriviedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'QwErTy'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifeCycleA
                <button onClick={this.changeState}>Click Me</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifeCycleA