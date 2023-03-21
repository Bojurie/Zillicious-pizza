import React from 'react';
import './MobileAppFiller.css'
import googleplay from '../images/google-play-badge.svg'
import appleplay from '../images/apple-app-store-badge.svg'

const MobileAppFiller = () => {
  return (
    <div className='Mobileappfiller'>
      <div className='Mobileappfiller-header'>
        <h1>Get the App</h1>
        <h2> Place your order and receive it in no time with our app </h2>
        <p>Please download our mobile app for convenient </p>
      </div>
      <div className='appStore-img'>
        <img src={googleplay} alt='Google play' />
        <img src={appleplay} alt='Apple play' />
      </div>

    </div>
  );
}

export default MobileAppFiller;
