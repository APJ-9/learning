import React from 'react'
import { useState } from 'react';

function ButtonList({value,key}) {
    const [disp,setDisp] = useState(false)
    const showDisplay = () =>{
        setDisp(true)
      }
    const hideDisplay = () =>{
        setDisp(false)
    }
  return (
    <div className="disp">
                  <button key={key} onMouseEnter={showDisplay} onMouseLeave={hideDisplay}>{value}</button>
                  {
              disp && <div className="displ">
              <h1>{value}</h1>

            </div>
            }
                </div>
  )
}

export default ButtonList