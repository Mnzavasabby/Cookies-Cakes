import React from 'react'
import './Food.css'
import gallery_1 from '../../assets/american-hamburgerr.jpg'
import gallery_2 from '../../assets/cookiess.jpg'
import gallery_3 from '../../assets/beef-burritoo.jpg'
import gallery_4 from '../../assets/mix-pizzaa.jpg'
import arrow from '../../assets/right-arroww.png'

const Food = () => {
  return (
    <div className='food'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
      <button className='btn dark-btn'>see more here <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Food
