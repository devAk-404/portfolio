import React from 'react'
import commerce from '../assets/e-commerce.jpg'
import '../styles/work.css'

function WorkCard() {
  return (
    <div className='work'>
        <div className='work-heading'>
            <h2>Projects</h2>
        </div>
        <div className='work-cards'>
        <div className='work-card'>
            <img src={commerce} alt='commerce-img'></img> 
            <h3>E-commerce Website</h3>
            <p className='text'>E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as iTunes Store).[1] There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business.</p>
            <div className='work-btns'>
              <button className='btn btn-source'>Source</button>
              <button className='btn btn-buy'>Buy</button>      
            </div>
        </div>
        <div className='work-card'>
            <img src={commerce} alt='commerce-img'></img> 
            <h3>E-commerce Website</h3>
            <p className='text'>E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as iTunes Store).[1] There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business.</p>
        </div>
        <div className='work-card'>
            <img src={commerce} alt='commerce-img'></img> 
            <h3>E-commerce Website</h3>
            <p className='text'>E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products (such as books from Amazon) or services (such as music downloads in the form of digital distribution such as iTunes Store).[1] There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business.</p>
        </div>
        </div>
    </div>
  )
}

export default WorkCard