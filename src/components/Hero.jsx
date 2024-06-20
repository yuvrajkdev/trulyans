import React from 'react'
import header from '../header/header'
import './Hero.css'

const Hero = () => {
  return (
   <div className="Hero">
      <div className="left-h">
        <header/>
      </div>
      <div className="right-h">right side</div>
   </div>
  )
}

export default Hero
