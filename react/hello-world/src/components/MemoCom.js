import React from 'react'

function MemoCom({ name }) {
  console.log("Rendering the memo components")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoCom)