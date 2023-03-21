import React from 'react'
import {
  Routes,
  Route, useLocation
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import ZShop from './pages/ZShop';
import About from './pages/About';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ZShop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
      
  )
}

export default AnimatedRoutes
