import React from 'react'
import './Footer.css'
import footerData from '../../data.json'
import FooterLast from './FooterLast'

function Footer() {
    const thingsToDo = footerData.footer.thingsToDo
    // console.log(thingsToDo)
    const footerLastElement = footerData.footer.footerLastElement
    console.log(footerLastElement)
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
                <div className="things-to-do">
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
            <div className='footer-last-element'>
                {
                    footerLastElement.map((elemnt,index)=>
                        <FooterLast key={index} data={elemnt}/>
                    )
                }
            </div>
        </div>
    )
}

export default Footer