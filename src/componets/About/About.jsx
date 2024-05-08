import React from 'react'
import './About.css'
import about_img from '../../assets/fried-meatt.jpg'
import playicon from '../../assets/play_iconn.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={playicon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About Cookies & Cakes</h3>
            <h2>Nurturing amaizing sweetness</h2>
            <p>Cookies & Cakes embark different categories of fast foods which can be the best to serve
              a one's desire at a time.Also,it is a place where people of different cultures meet,hence emphasizing
              a collaboration and intrnetworking amoung the customers 
            </p>
            <p>The location is accessible to all the people from different places around Dar es salaam
              We are pleasured to our customers due to the positive feedbacks we receive from them.
            </p>
            <p>we rae thrilled to be in this cooking industry and appreciating every one we meet and interact
              Just join us to experience a better taste.
            </p>
        </div>
      
    </div>
  )
}

export default About
