// import React from 'react'
// import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ChartIcon from '../images/shopping-cart-solid.svg'

// const Navbar = ({setShow, size}) => {
//   return (
//     <>
//     <nav className='nav'>
//       <div className='nav_box'>
//           <div className='Logo'>
//               <Link to='/home'><h1>ZZilious-pizza</h1></Link> 
//           </div>
//           <div className='Navbar'>
//             <ul className='Navbar-links'>
//               <li><Link to='/home'> Home</Link></li>
//               <li><Link to='/shop'>Zz-Shop</Link></li>
//               <li><Link to='/about'>About</Link></li>
//               <li><Link to='/contact'>Contact</Link></li>
//               <li className='Navbar-links_contact'>
//               <i class="fa-solid fa-phone"><span> 949-234-3432</span></i> 
//               </li>
//             </ul>
//             <div className='nav-chart' onClick={() => setShow(true)}>
//               <span><i class='fas fa-cart-plus'></i></span>
//               <span>{size}</span>
//             </div>
//           </div>
//       </div>
//     </nav>
      
//     </>
//   )
// }

// export default Navbar

import React from 'react';
import {Link } from 'react-router-dom'

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className='Logo'>
            <Link to='/home'><h1>ZZilious-pizza</h1></Link> 
        </div>
        <Navigation />
        <MobileNavigation />
        
    </nav>
  );
}

export default Navbar;
