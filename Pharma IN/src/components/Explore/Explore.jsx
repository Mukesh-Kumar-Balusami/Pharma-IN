/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import './Explore.css'


const Explore = () => {
    const [activeMenu, setActiveMenu] = useState('m1'); // Default active menu

    const handleClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className="explore">
            <div className='explore-heading'>
                <h1>Explore Pharma IN...</h1>
            </div>
            <div className="horizontal-menu">
                <ul className="menu-list">
                    <li className={`menu-item ${activeMenu === 'inventory' ? 'active' : ''}`} onClick={() => handleClick('inventory')}>Inventory</li>
                    <li className={`menu-item ${activeMenu === 'customers' ? 'active' : ''}`} onClick={() => handleClick('customers')}>Customers</li>
                    <li className={`menu-item ${activeMenu === 'vendor' ? 'active' : ''}`} onClick={() => handleClick('vendor')}>vendor</li>
                    <li className={`menu-item ${activeMenu === 'open-tickets' ? 'active' : ''}`} onClick={() => handleClick('open-tickets')}>Open Tickets</li>
                </ul>

                <div className="content-container">
                    {activeMenu === 'inventory' && (
                    <div className={`content ${activeMenu ? 'slide-right' : ''}`}>
                        {/* Content for each menu item */}
                        <h2>{`Content for inventory`}</h2>
                        <p>This is the content specific to inventory.</p>
                    </div>
                    )}
                    {activeMenu === 'customers' && (
                    <div className={`content ${activeMenu ? 'slide-right' : ''}`}>
                        {/* Content for each menu item */}
                        <h2>{`Content for customers`}</h2>
                        <p>This is the content specific to customers.</p>
                    </div>
                    )}
                    {activeMenu === 'vendor' && (
                    <div className={`content ${activeMenu ? 'slide-right' : ''}`}>
                        {/* Content for each menu item */}
                        <h2>{`Content for vendor`}</h2>
                        <p>This is the content specific to vendor.</p>
                    </div>
                    )}
                    {activeMenu === 'open-tickets' && (
                    <div className={`content ${activeMenu ? 'slide-right' : ''}`}>
                        {/* Content for each menu item */}
                        <h2>{`Content for open-tickets`}</h2>
                        <p>This is the content specific to open-tickets.</p>
                    </div>
                    )}
                </div>
{/* 
                <div className="menu-content">
                    {activeMenu === 'inventory' && <p>Paragraph content for m1 menu</p>}
                    {activeMenu === 'customers' && <p>Paragraph content for m2 menu</p>}
                    {activeMenu === 'vendor' && <p>Paragraph content for m3 menu</p>}
                    {activeMenu === 'open-tickets' && <p>Paragraph content for m4 menu</p>}
                </div> */}
            </div>
        </div>
        
    );
}

export default Explore