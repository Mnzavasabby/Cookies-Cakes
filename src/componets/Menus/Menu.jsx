import React from 'react'
import './Menu.css'
import menu_1 from '../../assets/brownies.jpg'
import menu_2 from '../../assets/cupcakee.jpg'
import menu_3 from '../../assets/brownies.jpg'

const Menu = () => {
  return (
    <div className='menus'>
        <div className="menu">
            <img src={menu_1} alt="" />
        </div>
        <div className="menu">
            <img src={menu_2} alt="" />
        </div>
        <div className="menu">
            <img src={menu_3} alt="" />
        </div>
      
    </div>
  )
}

export default Menu
