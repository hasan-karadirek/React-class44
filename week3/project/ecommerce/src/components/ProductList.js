import React, { useContext, useEffect, useState } from "react";
import fetchData from "../helpers/fetchHelper";
import useFetch from "../helpers/useFetch";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { FavouritesContext } from "../context/FavouritesContext";

export default function ProductList({ currentCategory, errorHandler }) {
  const { favContext, handleFavContext } = useContext(FavouritesContext);
  console.log(favContext);
  let url;
  if (!currentCategory) {
    const favoriteProductsUrl = "https://fakestoreapi.com/products/";
    const favoriteProductUrls = favContext.map(
      (id) => `${favoriteProductsUrl}${id}`
    );
    url = favoriteProductUrls.join(",");

    console.log(url);
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
          <li key={product.id} className="products--item">
            <a href={`/product/${product.id}`}>
              <div className="product">
                <div className="product-image-container">
                  <div
                    id={product.id}
                    onClick={(e) => {
                      console.log("click");
                      handleFavContext(product.id);
                      e.preventDefault();
                    }}
                    className="product-favourite-container"
                  >
                    <img
                      className="product-image--favourite"
                      src={heartRegular}
                    />
                  </div>
                  <img
                    className="product--image"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <span className="product--title">{product.title}</span>
              </div>
            </a>
          </li>
        );
      })
    : [];

  return loading ? <p>loading</p> : <ul className="products">{productList}</ul>;
}
