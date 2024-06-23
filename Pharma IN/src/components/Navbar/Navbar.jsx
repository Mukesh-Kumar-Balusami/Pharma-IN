/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Navbar.css";
import { assetsObject } from '../../assets/assets';


const Navbar = () => {

    const [menu,setMenu] = useState("menu");

  return (
    <div className='navbar'>
        {/* <div>
            <img src={assetsObject.logo} alt="Pharma IN Logo" className="logo" />
        </div> */}
            <div>
                <ul className="navbar-menu">
                    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                    <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                    <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</li>
                    <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
            </ul>
        </div>
        {/* <div className='navbar-right'>
            <button className="signup-button">Sign Up</button>
            <button className="login">Login</button>
        </div> */}
    </div>
  )
}

export default Navbar