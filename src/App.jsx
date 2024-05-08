import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Menu from './componets/Menus/Menu'
import Title from './componets/Title/Title'
import About from './componets/About/About'
import Food from './componets/Food/Food'
import Testimonials from './componets/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle='Our Menu' title='What We Offer'/>
          <Menu/>
          <About/>
          <Title subTitle='Gallery' title='Menu gallery'/>
          <Food/>
          <Title subTitle='Testimonials' title='What customers say'/>
          <Testimonials/>
      </div>
      
    </div>
  )
}

export default App

