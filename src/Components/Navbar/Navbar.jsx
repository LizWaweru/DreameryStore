import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/e-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [ menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='E-commerce logo'/>
        <p>Dreamery</p>
      </div>
      <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr></hr>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='womens'>Women</Link>{menu==="womens"?<hr></hr>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping}/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
