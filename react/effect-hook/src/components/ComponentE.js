import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <ComponentF />
            <h3>{user} - {channel}</h3>
        </div>
    )
}

export default ComponentE