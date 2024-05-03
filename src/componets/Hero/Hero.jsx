import React from 'react'
import './Hero.css'
import arrow from '../../assets/right-arroww.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure amaizing taste in every bite</h1>
        <p>Our cutting-edge restaurant is able to provide delicious cookies and snacks
            which can spur your every day works to be accomplished on a time through experiencing extraordinary
            sweets.
        </p>
        <button className='btn'>Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
