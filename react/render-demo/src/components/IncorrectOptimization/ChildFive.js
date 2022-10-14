import React from "react";

export const ChildFive = ({ name, person }) => {
    console.log('Childfive Render')
    return <div>Hello {name} {person.fname} {person.lname}</div>
}

export const MemoizedChildFive = React.memo(ChildFive)