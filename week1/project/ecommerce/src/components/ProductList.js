import React from "react";
export default function ProductList({ productSet }) {
  const productList = productSet.map((product) => {
    return (
      <li className="products--item">
        <div className="product">
          <img className="product--image" src={product.image} alt="" />
          <span className="product--title">{product.title}</span>
        </div>
      </li>
    );
  });

  return <ul className="products">{productList}</ul>;
}
