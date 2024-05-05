import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Menu from './componets/Menus/Menu'
import Title from './componets/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle='Our Menu' title='What We Offer'/>
          <Menu/>
      </div>
      
    </div>
  )
}

export default App

