import React from 'react'
import "./Hero.scss";
import Illustration from "../../assets/images/illustration-hero.svg"
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
            <h4 className='hero-title'>A Simple Bookmark Manager</h4>
            <p className='hero-desc'>A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>
            <div className='btn-grp'>
                <button className='btn active'>Get it on Chrome</button>
                <button className='btn'>Get it on Firefox</button>
            </div>
        </div>
        <div className='hero-right'>
            <img src={Illustration} alt="Illustration" />
        </div>
    </div>
  )
}

export default Hero