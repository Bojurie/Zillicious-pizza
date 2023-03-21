import React from 'react'
import BootStrapCarousel from '../component/BootStrapCarousel'
import Features from '../component/Features'
import MobileAppFiller from '../component/MobileAppfiller'
import WhyUs from '../component/WhyUs'
import './Home.css'

import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='Home'
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
       initial={{width: 0}}
       animate={{width: "100%"}}
          exit={{x: window.innerWidth}}
    >
      <BootStrapCarousel />
      <Features />
      <MobileAppFiller />
      <WhyUs />
    </motion.div>
  )
}

export default Home;
