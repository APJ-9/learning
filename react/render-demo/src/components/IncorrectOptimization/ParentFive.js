import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFive = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Akhil')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => { }

    const memoizedHandleClick = useCallback(handleClick, [])

    // On every render the react dom gives the person object a new reference so it will rerender every times Hence the child also render function have the same property as objects
    console.log('ParentFive Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
            <button onClick={() => setName('APJ')}>Change name</button>
            <MemoizedChildFive name={name} person={memoizedPerson} />
        </div>
    )
}