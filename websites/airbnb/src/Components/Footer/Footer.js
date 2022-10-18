import React from 'react'
import './Footer.css'
import footerData from '../../data.json'

function Footer() {
    const thingsToDo = footerData.footer.thingsToDo
    console.log(thingsToDo)
    return (
        <div className='footer'>
            <div className='continue-exploring'>
                <h4>Continue exploring beach homes</h4>
                <button> Show more</button>
            </div>
            <div className="inspiration-for-future">
                <h4>Inspiration for future getaways</h4>
                <span className='sub-head'>Things to do</span>
                <div className="line"></div>
                <div class="things-to-do">
                    {
                        thingsToDo.map((thing,index)=>(
                            <div key={index} className="places">
                                <p className="upper">{thing.upperPlace}</p>
                                <p className="lower">{thing.lowerPlace}</p>
                            </div>
                        ))
                    }
                </div>
                    <p className='show-more-footer' >Show more</p>
            </div>
            

        </div>
    )
}

export default Footer