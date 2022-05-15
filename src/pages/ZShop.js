import React from 'react'
import Cards from '../component/Cards';
import './Zshop.css'
import Header from './Header';
import Footer from '../component/Footer';

const ZShop = () => {
  return (
    <>
      <div className='Zshop'>
        <Header />
        <div className='container'>
          <div className='Zshop-wrapper'>
              <div className='heading'>
              <h1>Shop</h1>
           </div>
           </div>
          <Cards />
        </div>
        <Footer />
        
      </div>
    </>
  )
}

export default ZShop;
