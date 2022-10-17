import React from 'react'
import './Header.css'
import sliderCardData from '../../data.json'


function HeaderBottom() {
    const cards =  sliderCardData.header
    console.log(sliderCardData.header[0])
    return (
        <div className='header-bottom'>
            <div className="header-slider">
                <div className="header-slider-inner">
                        {
                            cards.map((card,index)=>
                                <div key={index} className={index===0?"element-card first":"element-card"}>
                                     <div className="img">
                                        <img src={card.imageURL} alt="url broken" />
                                     </div>
                                     <p>{card.title}</p>
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom