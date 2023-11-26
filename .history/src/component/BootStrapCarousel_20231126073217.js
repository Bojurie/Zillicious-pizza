import React from 'react'
import './BootStrapCarousel.css';
import { Carousel } from 'react-bootstrap'


const backImage = 'https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'

const backImage1 = 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
const backImage2 = 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg'


const BootStrapCarousel = () => {
  return (
    <>
       <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block"
            src={backImage2}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>Taste your tonge will Remember</h3> */}
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={backImage}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={backImage1}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
    </>
  )
}

export default BootStrapCarousel;
