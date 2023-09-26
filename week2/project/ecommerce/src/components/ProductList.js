import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchHelper";

export default function ProductList({ currentCategory }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (currentCategory === "all") {
      fetchData("https://fakestoreapi.com/products").then((result) =>
        setProducts(result)
      );
    } else {
      fetchData(
        `https://fakestoreapi.com/products/category/${currentCategory.replace(
          "FAKE: ",
          ""
        )}`
      ).then((result) => {
        setProducts(result);
      });
    }
  }, [currentCategory]);

  const productList = products.map((product) => {
    return (
      <li key={products.indexOf(product)} className="products--item">
        <a href={`/product/${product.id}`}>
          <div className="product">
            <img
              className="product--image"
              src={product.image}
              alt={product.title}
            />
            <span className="product--title">{product.title}</span>
          </div>
        </a>
      </li>
    );
  });

  return productList.length === 0 ? (
    "loading"
  ) : (
    <ul className="products">{productList}</ul>
  );
}
