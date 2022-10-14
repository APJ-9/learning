import React from "react"

type InputProps = {
    value:string
    handleChange:(event: React.ChangeEvent)=>void
}
export const Input = () => {
  return (
    <div>
        <input type='text'/>
    </div>
  )
}
