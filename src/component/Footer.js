import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-wrapper'>
          <div className='footer-location'>
            <h2>Location</h2>
            <p>1211 Avenue of the Americas, between 47th and 48th Street, s</p>
          </div>
          <div className='footer-social'>
            <h2>Social Media Links</h2>
            <div className='social-links'>
                <p><i class="fa-brands fa-instagram"></i></p>
                <p><i class="fa-brands fa-facebook"></i></p>
                <p><i class="fa-brands fa-twitter"></i></p>
                <p><i class="fa-brands fa-linkedin"></i></p>
            </div>
            

          </div>
          <div className='footer-about'>
            <h2>About</h2>
            <p>The Dow Jones Industrial Average, Dow Jones, or simply the Dow, is a price-weighted measurement stock market index o.</p>
          </div>
          
        </div>
    </div>
  );
}

export default Footer;
