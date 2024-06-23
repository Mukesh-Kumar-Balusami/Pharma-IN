/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home_Dashboard/Home'
import Admin_Dashboard from './pages/Admin_Dashboard/Admin_Dashboard'
import Retailer_Dashboard from './pages/Retailer_Dashboard/Retailer_Dashboard'
import Vendor_Dashboard from './pages/Vendor_Dashboard/Vendor_Dashboard'
import Consumer_Dashboard from './pages/Consumer_Dashboad/Consumer_Dashboard'


const App = () => {
  return (
    <div className='PharmaINApp'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Admin_Dashboard/>} />
        <Route path='/' element={<Retailer_Dashboard/>} />
        <Route path='/' element={<Vendor_Dashboard/>} />
        <Route path='/' element={<Consumer_Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App