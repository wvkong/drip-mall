import React from 'react'
import ProductCard from '../Components/ProductCard';
import "./Products.css"

function Shoes({ products, cartIt }) {
  return (
    <div className="prod-parent-container">
    <div className="product-container">
      {products
        .filter((product) => product.category === "Shoes")
        .map((product) => {
          return <ProductCard product={product} cartIt={cartIt} />;
        })}
    </div>
    </div>
  );
}

export default Shoes