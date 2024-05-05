import React from 'react'
import './Menu.css'
import menu_1 from '../../assets/beef-tomatoo.jpg'
import menu_2 from '../../assets/christmas-sweets.jpg'
import menu_3 from '../../assets/chocolate-cakee.jpg'
import menu_icon_1 from '../../assets/food-fast.png'
import menu_icon_2 from '../../assets/cookie_icon.png'
import menu_icon_3 from '../../assets/cake_icon.png'

const Menu = () => {
  return (
    <div className='menus'>
        <div className="menu">
            <img src={menu_1} alt="" />
            <div className="caption">
              <img src={menu_icon_1} alt="" />
              <p>Fast Foods</p>
            </div>
        </div>
        <div className="menu">
            <img src={menu_2} alt="" />
            <div className="caption">
              <img src={menu_icon_2} alt="" />
              <p>Fast Foods</p>
            </div>
        </div>
        <div className="menu">
            <img src={menu_3} alt="" />
            <div className="caption">
              <img src={menu_icon_3} alt="" />
              <p>Fast Foods</p>
            </div>
        </div>
      
    </div>
  )
}

export default Menu
