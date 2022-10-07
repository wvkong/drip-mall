import React from 'react'
import ProductCard from '../Components/ProductCard';

function Shoes({ products, cartIt }) {
  return (
    <div className="product-container">
      {products
        .filter((product) => product.category === "Shoes")
        .map((product) => {
          return <ProductCard product={product} cartIt={cartIt} />;
        })}
    </div>
  );
}

export default Shoes