import React from "react";
import allProducts from "../fake-data/all-products";
export default function ProductList({ productSet }) {
  const productList = productSet.map((product) => {
    return (
      <li key={allProducts.indexOf(product)} className="products--item">
        <div className="product">
          <img
            className="product--image"
            src={product.image}
            alt={product.title}
          />
          <span className="product--title">{product.title}</span>
        </div>
      </li>
    );
  });

  return <ul className="products">{productList}</ul>;
}
