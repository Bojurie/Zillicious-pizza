import React from 'react'
import BootStrapCarousel from '../component/BootStrapCarousel'
import Features from '../component/Features'
import MobileAppFiller from '../component/MobileAppfiller'
import WhyUs from '../component/WhyUs'
import './Home.css'



const Home = () => {
  return (
    <div className='Home'>
      <BootStrapCarousel />
      <Features />
      <MobileAppFiller />
      <WhyUs />
    </div>
  )
}

export default Home;
