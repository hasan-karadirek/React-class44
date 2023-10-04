import React, { useContext } from "react";

import useFetch from "../helpers/useFetch";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { FavouritesContext } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

export default function ProductList({ currentCategory, errorHandler }) {
  const { favContext, handleFavContext } = useContext(FavouritesContext);
  let url;
  if (!currentCategory) {
    const apiProductEndPoint = "https://fakestoreapi.com/products/";
    const favoriteProductUrls = favContext.map(
      (id) => `${apiProductEndPoint}${id}`
    );
    url = favContext.length === 0 ? "" : favoriteProductUrls.join(",");
  } else if (currentCategory === "all") {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${currentCategory.replace(
      "FAKE: ",
      ""
    )}`;
  }
  const [products, loading] = useFetch(url, errorHandler);

  const productList = products
    ? products.map((product) => {
        return (
          <li key={product.id} className="products-item">
            <div className="product-container">
              <Link to={`/product/${product.id}`}>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="product-title">{product.title}</span>
                </div>
              </Link>
              <button
                id={product.id}
                onClick={() => handleFavContext(product.id)}
                className="toggle-favourites "
              >
                <img
                  alt=""
                  className="fav-toggle-icon"
                  src={
                    favContext.includes(product.id) ? heartSolid : heartRegular
                  }
                />
              </button>
            </div>
          </li>
        );
      })
    : [];

  return loading ? <p>loading</p> : <ul className="products">{productList}</ul>;
}
