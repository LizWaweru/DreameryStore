import React from 'react'
import './Hero.css'
import stylish from '../Assets/stylish.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>Check out all the trends,</p>
                    <span class="material-symbols-outlined">waving_hand</span>
                </div>
                <p>collections</p>
                <p>for this season</p>
            </div>
            <div className='hero-latest-btn'>
              <div>Latest Collection</div>
              <i class='bx bxs-right-arrow-circle'></i>
            </div>    
        </div>
        <div className='hero-right'>
          <img src={stylish} alt='stylish'/>         
        </div>
    </div>
  )
}

export default Hero
