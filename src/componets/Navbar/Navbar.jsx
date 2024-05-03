import React from 'react'
import './navbar.css'
import logo from '../../assets/food_juic.png'; 

const Navbar = () => {
  return (
    <div>
        <nav className='container'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Location</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
