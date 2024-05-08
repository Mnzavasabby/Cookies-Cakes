import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/food_juic.png'; 

const Navbar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  return (
    <div>
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
