import React, { useState } from 'react'
import './Header.css'
import sliderCardData from '../../data.json'


function HeaderBottom() {
    const cards = sliderCardData.header
    console.log(sliderCardData.header[0])
    function clickHandler(e) {
        console.log(e.currentTarget)
        // e.currentTarget.classList.add('active')
    }
    return (
        <div className='header-bottom'>
            <div className="header-slider">
                <div className="header-slider-inner">
                    {
                        cards.map((card, index) =>
                            <button key={index} className={index === 0 ? "element-card first" : "element-card"} onClick={clickHandler}>
                                <div className="img">
                                    <img src={card.imageURL} alt="url broken" />
                                </div>
                                <p>{card.title}</p>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom