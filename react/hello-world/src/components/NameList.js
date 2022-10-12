import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Akhil',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Nikhil',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'APJ',
            age: 20,
            skill: 'TypeScript'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList