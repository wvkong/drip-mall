import React from 'react'
import ProductCard from '../Components/ProductCard'

function Electronics({products, cartIt}) {
  return (
    <div className='product-container'>
      {products
        .filter(product => product.category === "Electronics")
        .map(product => {
          return <ProductCard product={product} cartIt={cartIt} />
        })
      }
    </div>
  )
}

export default Electronics