import React from 'react'

// const GreetProp = (props) => {
// const GreetProp = (props) => {
const GreetProp = ({ name }) => {
    // const { name } = props
    return (
        <div>
            <h1>Hello {name}</h1>
            {/* {props.children} */}
        </div>
    )
}
export default GreetProp