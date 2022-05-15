import React, {useState} from 'react';
import Cards from './Cards';
import products from './Context'

const Shop = ({ handleClick }) => {
  const [cart, setCart ] = useState([]);
  return (
    <section>
      {products.map((product) => (
        <Cards key={product._id} product={product}  handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Shop;