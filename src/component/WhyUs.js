import React from 'react'
import './WhyUs.css'
import image from '../images/image8_1.png'

const WhyUs = () => {
  return (
    <>
    <div className='WhyUs'> 
        
        
        <div className='WhyUs-content'>
           <div className='WhyUs-img'>
             <img src={image} />
          </div>
          <div className='WhyUs-content_wrapper'>

            <div className='WhyUs-content_h1'>
              <h1>Why Choose Us?</h1>
            </div>
            <div className='WhyUs-content_wrapper-side'>
                <div className='icon'>
                <i className="fa-solid fa-truck"></i>
               </div>
                <div className='WhyUs-content_wrapper_icon-content'>
                  <h3>Quality Food</h3>
                  <p>The best food around the area</p>
                </div>
            </div>
             <div className='WhyUs-content_wrapper-side'>
                <div className='icon'>
                  <i className="fa-solid fa-truck"></i>
                </div>
                <div className='WhyUs-content_wrapper_icon-content'>
                  <h3>Fast Delivery</h3>
                  <p>The best food around the area</p>
                </div>
              
            </div>
             <div className='WhyUs-content_wrapper-side'>
               <div className='icon'>
                 <i className="fa-solid fa-truck"></i>
               </div>
               <div className='WhyUs-content_wrapper_icon-content'>
                 <h3>Support 24/7</h3>
                 <p>The best food around the area</p>
               </div>
                
            </div>
          </div>
        </div>
        
    </div>
      
    </>
  )
}

export default WhyUs
