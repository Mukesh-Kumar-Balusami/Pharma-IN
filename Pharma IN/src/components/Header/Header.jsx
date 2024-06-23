/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import { assetsObject } from '../../assets/assets';


const Header = () => {
  return (
    <div className='header'>
        <div className="header-logo">
            <img className='logo' src={assetsObject.logo} alt="Logo" />
        </div>
        <div className='header-logoname'>
            <img className='logoname' src={assetsObject.logo_namelogo} alt="Logoname" />
        </div>
        <div className='header-context'>
            <div className='header-content'>
                <h1>Kick Start...</h1>
                <h3>Hey there, Ready to experience the Pharma IN</h3>
            </div>
            <div className='header-buttons'>
                <button className="signup-button">Sign Up</button>
                <button className="login">Login</button>
            </div>
            <div className="social-contant">
                <img src={assetsObject.instagram} alt="Pharma IN Instagram account" className="instagram" />
                <img src={assetsObject.facebook} alt="Pharma IN Facebook account" className="facebook" />
            </div>
        </div>
    </div>
  )
}

export default Header