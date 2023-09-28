import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchHelper";

export default function ProductList({ currentCategory, errorHandler }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (currentCategory === "all") {
      setLoading(true);
      fetchData("https://fakestoreapi.com/products")
        .then((result) => setProducts(result))
        .catch((err) => errorHandler(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      fetchData(
        `https://fakestoreapi.com/products/category/${currentCategory.replace(
          "FAKE: ",
          ""
        )}`
      )
        .then((result) => {
          setProducts(result);
        })
        .catch((err) => errorHandler(err))
        .finally(() => setLoading(false));
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

  return loading ? <p>loading</p> : <ul className="products">{productList}</ul>;
}
