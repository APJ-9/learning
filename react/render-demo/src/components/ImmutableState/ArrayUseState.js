import React, { useState } from 'react'
const initState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handleCllick = () => {
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)
    }
    console.log("ArrayUseState Rendering")
    return (
        <div>
            <button onClick={handleCllick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person} </div>
                ))
            }
        </div>
    )
}