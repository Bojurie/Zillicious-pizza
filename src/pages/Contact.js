import React from 'react'
import Header from './Header';
import './Contact.css'
import Contactform from '../component/ContactForm';
import { motion } from 'framer-motion';

const contactPiZZA = 'https://images.unsplash.com/photo-1574615552620-54cd32a28519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80';

const Contact = () => {
  return (
    <>
    <motion.div className='Contact'
      //  initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
       initial={{width: 0}}
       animate={{width: "100%"}}
       exit={{x: window.innerWidth}}
      >
      <Header />
      <div className='container'>
        <div className='Contact-Wrapper'>
          <div className='Contact-content'>
              <div className='heading'>
                  <h1>Contact</h1>
              </div>
              {/* <p>Please contact us if you have any questions</p> */}
              <Contactform />
          </div>
          <div className='Contact-img'>
            <img src={contactPiZZA} alt='' />
          </div>   
        </div>
      </div>
    </motion.div>
      
    </>
  )
}

export default Contact;
