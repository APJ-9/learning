import React from "react";

const Hello = () => {
    //With JSX
    // return (
    //     <div className="name">
    //         <h1> Hello APJ</h1>
    //     </div>
    // )

    //Without JSX
    return React.createElement('div',
        { id: 'hello', className: "name" },
        React.createElement('h1', null, 'Hello APJ'))
}

export default Hello