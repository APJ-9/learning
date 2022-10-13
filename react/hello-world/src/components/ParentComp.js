import React, { Component } from 'react'
import MemoCom from './MemoCom'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Akhil'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Akhil'
            })
        }, 2000)
    }
    render() {
        console.log('************* parent comp render *************')
        return (
            <div>
                Parent Comp
                <MemoCom name={this.state.name} />
                {/* <RegularComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp