import React from 'react'
import ProductCard from '../Components/ProductCard';

function Cart({products}) {
  return (
    <div>
      <div className="product-container">
        {products
          .filter((product) => product.discount >= 50)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default Cart