import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h1 className='ad'>Zwiggy</h1>
    <h4>Admin Panel</h4>
      {/* <img className='logo' src={assets.logo} alt="" /> */}
      {/* <img className='profile' src={assets.profile_image} alt="" /> */}
    </div>
  )
}

export default Navbar
