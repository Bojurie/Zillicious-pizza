import React from 'react';
import {Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import './Navbar.css';


const Navlinks = (props) => {
   const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
        <nav className='nav'>
            <ul className='Navbar-links'>
              <li initial={animateFrom} 
                  animate={animateTo} 
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <Link to='/'> Home</Link>
              </li>
              <li 
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <Link to='/shop'>Zz-Shop</Link>
              </li>
              <li 
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <Link to='/about'>About</Link>
              </li>
              <li 
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                  <Link to='/contact'>Contact</Link>
              </li>
              <li className='Navbar-links_contact'>
              <i className="fa-solid fa-phone"><span> 949-234-3432</span></i> 
              </li>
            </ul>
            
      </nav>

  );
}

export default Navlinks;
