import React from 'react'
import ProductCard from '../Components/ProductCard';

function Groceries({ products, cartIt }) {
  return (
    <div className="container">
      {products
        .filter((product) => product.category === "Groceries")
        .map((product) => {
          return <ProductCard product={product} cartIt={cartIt} />;
        })}
    </div>
  );
}

export default Groceries