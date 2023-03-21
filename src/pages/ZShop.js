import React from 'react'
import Cards from '../component/Cards';
import './Zshop.css'
import Header from './Header';


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
      </div>
    </>
  )
}

export default ZShop;
