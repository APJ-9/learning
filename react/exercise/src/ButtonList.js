import React from 'react'
import './App.css';
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
                  <button key={key} onClick={showDisplay} >{value}</button>
                  {
              disp && <div className="displ">
                <div className="container">
                    <h1>{value}</h1>
                </div>
              <button className='close' onClick={hideDisplay}>X</button>

            </div>
            }
                </div>
  )
}

export default ButtonList