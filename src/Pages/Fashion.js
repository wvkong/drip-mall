import React from 'react'
import ProductCard from '../Components/ProductCard';

function Fashion({ products, cartIt }) {
  return (
    <div className="product-container">
      {products
        .filter((product) => product.category === "Fashion")
        .map((product) => {
          return <ProductCard product={product} cartIt={cartIt} />;
        })}
    </div>
  );
}

export default Fashion