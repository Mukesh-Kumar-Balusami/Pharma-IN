/* eslint-disable no-unused-vars */
import React from 'react'
import "./Navbar.css";
import { assetsObject } from '../../assets/assets';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={assetsObject.logo_namelogo} alt="Pharma IN Logo + NameLogo" className="logo_namelogo" />
        </div>
            <div>
                <ul className="navbar-menu">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Mobile App</li>
                    <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <button className="signup-button">Sign Up</button>
            <button className="login">Login</button>
        </div>
    </div>
  )
}

export default Navbar