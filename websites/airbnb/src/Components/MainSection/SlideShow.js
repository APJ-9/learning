import React, { useState, useEffect } from 'react'
import './Card.css'

function SlideShow(props) {
  const images = props.images
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])
  const next = (e) => {
    if(index === images.length-1){
      console.log(e.currentTarget)
    } else {
      setIndex(index + 1)
    }
   }
  const prev = () => {
    if(index === 0){
      setIndex(0)
    } else {
      setIndex(index - 1)
    }
   }

  return (
      <div className="slide-show">
        <div className="images">
          <img src={images[index]} alt="Broken url" />
            <div className="slider-btns">
              <button className='left' onClick={prev}></button>
              <button className='right' onClick={next}></button>
            </div>
        </div>
        <div className="heart">
          <svg viewBox="0 0 32 32" className='heart-svg' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </div>
      </div>
  )
}

export default SlideShow