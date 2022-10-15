import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  voluptate fugiat repudiandae inventore consequatur nihil ab soluta!</h1>
        </div>
        <div className="fade-buttom"></div>
    </div>
  )
}

export default Banner