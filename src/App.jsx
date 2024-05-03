import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Menu from './componets/Menus/Menu'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Menu/>
      </div>
      
    </div>
  )
}

export default App

