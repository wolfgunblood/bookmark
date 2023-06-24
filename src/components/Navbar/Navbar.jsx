import React from 'react';
import "./Navbar.scss";
import Logo from "../../assets/images/logo-bookmark.svg"
const Navbar = () => {
  return (
    <nav className='nav-container'>
        <img src={Logo} alt="logo" className='logo' />

        <ul className='nav-list'>
            <li className='nav-item'>FEATURES</li>
            <li className='nav-item'>PRICING</li>
            <li className='nav-item'>CONTACT</li>
            <li className='nav-item'><button className='nav-btn'>LOGIN</button></li>
        </ul>
    </nav>
  )
}

export default Navbar