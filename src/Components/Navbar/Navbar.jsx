import React from 'react'
import './Navbar.css'
import logo from '../Assets/e-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='E-commerce logo'/>
        <p>Dreamery</p>
      </div>
      <ul className='nav-menu'>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}

export default Navbar
