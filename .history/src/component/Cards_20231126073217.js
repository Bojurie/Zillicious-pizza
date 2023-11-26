import React, {Component } from 'react'
import './Card.css'
import {DataContext} from './Context'
class Cards extends Component {
  static contextType = DataContext

  render () {
    const { products } = this.context;

   const handleClick = () =>{

    }

    return (
      <>
        <div id='cards'>
          {products.map(product => (
            <div className='cards-wrapper'key={product._id}>
              <img src={product.src} alt='' />
              <div className='card' >
                <div className='content'>
                  <h3> {product.title}</h3>
                  <p>{product.description}</p>
                  <span>${product.price}</span>
                </div>
                <button onClick={handleClick}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Cards
