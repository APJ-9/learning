import React from 'react'
import './myStyles.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div >
            <h1 className={className}>Stylesheet</h1>
            <h2 style={heading}>InLine</h2>
        </div>
    )
}

export default Stylesheet