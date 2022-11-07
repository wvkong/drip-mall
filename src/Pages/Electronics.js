import React from 'react'
import ProductCard from '../Components/ProductCard'
import "./Products.css"


function Electronics({ products, cartIt }) {
  return (
    <div className="prod-parent-container">
      <div className='product-container'>
        {products
          .filter(product => product.category === "Electronics")
          .map(product => {
            return <ProductCard product={product} cartIt={cartIt} />
          })
        }
      </div>
    </div>
  )
}

export default Electronics