import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('APJ')

    console.log('ParentTwo Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c = c + 1)}>Count {count}</button>
            <button onClick={() => setName('Akhil')}>Change name</button>
            <MemoizedChildTwo name={name}></MemoizedChildTwo>
        </div>
    )
}