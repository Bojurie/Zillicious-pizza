import React from 'react'
import Header from './Header';
import './About.css'
import { motion } from 'framer-motion';

const chef = 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'

const pizza = 'https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

const oven = 'https://images.unsplash.com/photo-1592797592479-61cbb29e3538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

const About = () => {
  return (
    <>
      <motion.div className='About'
          initial={{width: 0}}
          animate={{width: "100%"}}
          exit={{x: window.innerWidth}}
          >
        <Header/>
          <div className='container'>
            <div className='About-wrapper'>
              <div className='heading'>
                  <h1>About</h1>
              </div>
              <div className='about-para'>
                <img src={chef} alt='' />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod      tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.
                  
                </p>
              </div>
              <div className='about-para1'>
                <img src={pizza} alt='' />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod      tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.
                  </p>
              </div>
              <div className='about-para2'>
                <img src={oven} alt='' />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod      tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor. Aenean sed adipiscing diam donec adipiscing tristique. Massa sapien faucibus et molestie ac feugiat sed lectus. In cursus turpis massa tincidunt dui ut ornare lectus sit. Libero volutpat sed cras ornare arcu dui.
                  
                </p>
              </div>
          </div>
          </div>
       </motion.div>
    </>
  )
}

export default About;
