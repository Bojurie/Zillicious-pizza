import React from 'react';
import {Link } from 'react-router-dom'
import './Navbar.css'


const Navlinks = (props) => {
  return (
        <nav className='nav'>
            <ul className='Navbar-links'>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/home'> Home</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/shop'>Zz-Shop</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/about'>About</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/contact'>Contact</Link></li>
              <li className='Navbar-links_contact'>
              <i class="fa-solid fa-phone"><span> 949-234-3432</span></i> 
              </li>
            </ul>
            
      </nav>

  );
}

export default Navlinks;
