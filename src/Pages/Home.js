import React from 'react'
import ProductCard from '../Components/ProductCard'
import "./Home.css"

function Home({ products, cartIt, search }) {
  return (
    <div className='homeContainer'>
      <h2 >Top Deals!</h2>
      <div className="product-container">
        {products
          .filter(product => product.title.includes(search))
          .filter((product) => product.discount >= 50)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product} cartIt={cartIt} />
            );
          })}
      </div>
    </div>
  );
}

export default Home