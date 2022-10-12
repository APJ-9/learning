import React from 'react'

function Person({ person }) {
    return (
        <div><h2>Im {person.name}. Im {person.age} years old. I know {person.skill}.</h2></div>
    )
}

export default Person