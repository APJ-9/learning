import React from 'react'
import './Card.css'
import cardData from '../../data.json'
import SlideShow from './SlideShow'

function Card() {
    const cards= cardData.card
    console.log(cards)
  return (
    <div className='main-section'>
        {
            cards.map((card,index)=>
                <div key={index} className="main-card">
                    <div className="slide-show">
                        <div className="images">
                            <SlideShow />
                        </div>
                        <div className="heart">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="card-elements">
                        <div className="name-and-rating">
                            <h3>Abiansemal, Indonesia</h3>
                            <p><i className="fa fa-star" aria-hidden="true"></i> 4.87</p>
                        </div>
                        <div className="other-details">
                            <p>4,548 kilometres</p>
                            <p>2-7 Jul</p>
                            <div className="amount">
                                <h3>&#8377;28,739</h3>
                                <span>&nbsp;night</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Card