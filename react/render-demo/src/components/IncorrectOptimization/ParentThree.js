import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('APJ')

    console.log('ParentThree Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c = c + 1)}>Count {count}</button>
            <button onClick={() => setName('Akhil')}>Change name</button>
            {/* <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
            <MemoizedChildFour name={name}></MemoizedChildFour>
        </div>
    )
}
//Incorrect useage of memoziation 