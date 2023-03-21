import React from 'react'
import Cards from '../component/Cards';
import './Zshop.css'
import Header from './Header';
import { motion } from 'framer-motion';


const ZShop = () => {
  return (
    <>
      <motion.div className='Zshop' 
          // initial={{opacity: 0}}
          // animate={{opacity: 1}}
          // exit={{opacity: 0}}

           initial={{width: 0}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth}}
      >
        <Header />
        <div className='container'>
           <div className='Zshop-wrapper'>
              <div className='heading'>
                <h1>Shop</h1>
              </div>
           </div>
           <Cards />
        </div>
      </motion.div>
    </>
  )
}

export default ZShop;
