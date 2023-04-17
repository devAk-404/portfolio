import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pricingcard.css'

function PricingCard() {
    return (
        <div className='pricingcard-container'>
           <div className='pricing-header'>
                <h3>Product Pricing</h3>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <h3>-Basic-</h3>
                    <span className='separator'></span>
                    <p className='price'>100$</p>
                    <p>-3 pages-</p>
                    <p>-5 hrs-</p>
                    <p>-responsive-</p>
                    <p>-Featured-</p>
                    <Link to='/Contact'>
                        <button className='btn btn-purchase'>Purchase</button>
                    </Link>
                </div>
                <div className='card'>
                    <h3>-Basic-</h3>
                    <span className='separator'></span>
                    <p className='price'>100$</p>
                    <p>-3 pages-</p>
                    <p>-5 hrs-</p>
                    <p>-responsive-</p>
                    <p>-Featured-</p>
                    <Link to='/Contact'>
                        <button className='btn btn-purchase'>Purchase</button>
                    </Link>
                </div>
                <div className='card'>
                    <h3>-Basic-</h3>
                    <span className='separator'></span>
                    <p className='price'>100$</p>
                    <p>-3 pages-</p>
                    <p>-5 hrs-</p>
                    <p>-responsive-</p>
                    <p>-Featured-</p>
                    <Link to='/Contact'>
                        <button className='btn btn-purchase'>Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard