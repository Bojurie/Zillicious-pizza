import React from 'react'
import BootStrapCarousel from '../component/BootStrapCarousel'
import Features from '../component/Features'
import Footer from '../component/Footer'
import MobileAppFiller from '../component/MobileAppfiller'
import WhyUs from '../component/WhyUs'
import './Home.css'



const Home = () => {
  return (
    <div>
      <BootStrapCarousel />
      <Features />
      <MobileAppFiller />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default Home;
