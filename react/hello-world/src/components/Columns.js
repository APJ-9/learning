import React from 'react'

function Columns() {
    return (
        <>
            {/* <> </> --> Represents the React.Fragment tag also but there is a 
            limatation we cannot pass the keys on empty tags */}
            <td>Name</td>
            <td>Akhil</td>
        </>
    )
}

export default Columns