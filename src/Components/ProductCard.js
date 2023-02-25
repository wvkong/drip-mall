import React from "react";

function ProductCard({ product, cartIt }) {
  return (
    <div class="relative h-[30vh] overflow-hidden rounded-xl bg-white hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          className="h-[230px] w-full object-cover"
          alt=""
        />
        {/* <button
          class="absolute bottom-2 rounded-lg bg-gray-100 py-2 px-3 capitalize text-gray-500"
          onClick={() => cartIt(product)}
        >
          add to cart
        </button> */}
      </div>
      <span class="absolute top-2 right-2 animate-pulse rounded-full bg-white px-1 capitalize text-gray-500">
        {product.discount}% off
      </span>
      <div class="ml-2 font-serif text-gray-500">
        <h2 class="font-serif font-bold">{product.title}</h2>
        <span class="float-left text-red-500">
          was{" "}
          <span className="line-through decoration">
            ${product.actual_price}
          </span>
        </span>
        <span class="float-right text-gray-600 mr-2">now ${product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
