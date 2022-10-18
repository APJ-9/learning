import React from 'react'
import './Card.css'
import cardData from '../../data.json'
import SlideShow from './SlideShow'

function Card() {
    const cards = cardData.card
    console.log(cards.length)
    return (
        <div className='main-section'>
            {
                cards.map((card, index) =>
                    <div key={index} className="main-card">
                        <SlideShow images={card.images} />
                        <div className="card-elements">
                            <div className="name-and-rating">
                                <h3>{card.name}</h3>
                                <p><i className="fa fa-star" aria-hidden="true"></i> {card.rating}</p>
                            </div>
                            <div className="other-details">
                                <p>{card.distance} kilometres away</p>
                                <p>{card.date}</p>
                                <div className="amount">
                                    <h3>&#8377;{card.price}</h3>
                                    <span>&nbsp;{card.day}</span>
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