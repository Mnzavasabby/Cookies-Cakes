import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right-arroww_.png'
import back_icon from '../../assets/left-arroww_.png'
import user_1 from '../../assets/young.jpg'
import user_2 from '../../assets/cute-girl.jpg'
import user_3 from '../../assets/man-red.jpg'
import user_4 from '../../assets/front-view.jpg'


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn'/>
        <img src={back_icon} alt=""  className='back-btn'/>
        <div className="slider">
          <ul>
            <li>
              <div className="slide">
                <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>Johnson Jonas</h3>
                    <span>Dodoma,Tanzania</span>
                    </div>
                  </div>
                  <p>
                  Choosing to join Cookies and Cakes restaurant,changed my lifestyle through intracting with different valuable
                  people form different places.Sharing different experiences in life that brought us together.Also,i can not tell how amaizing
                  sweetness of the meals is.
                </p>
                </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>Janeth Massawe</h3>
                    <span>Kilimanjaro,Tanzania</span>
                    </div>
                  </div>
                  <p>
                  Choosing to join Cookies and Cakes restaurant,changed my lifestyle through intracting with different valuable
                  people form different places.Sharing different experiences in life that brought us together.Also,i can not tell how amaizing
                  sweetness of the meals is.
                </p>
                </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>JMohammed Sulesh</h3>
                    <span>Tanga,Tanzania</span>
                    </div>
                  </div>
                  <p>
                  Choosing to join Cookies and Cakes restaurant,changed my lifestyle through intracting with different valuable
                  people form different places.Sharing different experiences in life that brought us together.Also,i can not tell how amaizing
                  sweetness of the meals is.
                </p>
                </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                    <h3>Asia Said</h3>
                    <span>Morogoro,Tanzania</span>
                    </div>
                  </div>
                  <p>
                  Choosing to join Cookies and Cakes restaurant,changed my lifestyle through intracting with different valuable
                  people form different places.Sharing different experiences in life that brought us together.Also,i can not tell how amaizing
                  sweetness of the meals is.
                </p>
                </div>
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
