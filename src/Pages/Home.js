import React from 'react'
import ProductCard from '../Components/ProductCard'

function Home({ products, cartIt, search }) {
  return (
      <div className="container">
        {products
          .filter(product => product.title.includes(search))
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product} cartIt={cartIt} />
            );
          })}
      </div>
  );
}

export default Home