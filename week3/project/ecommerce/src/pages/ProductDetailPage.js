import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import { FavouritesContext } from "../context/FavouritesContext";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import Header from "../components/Header";

export default function ProductDetailPage({ errorHandler }) {
  const { id } = useParams();
  const { favContext, handleFavContext } = useContext(FavouritesContext);
  const [product, loading] = useFetch(
    `https://fakestoreapi.com/products/${id}`,
    errorHandler
  );

  return loading ? (
    <p>loading</p>
  ) : (
    <>
      <Header />
      <div className="product-details">
        <div className="title-container">
          <h1 className="title-container--title">{product[0].title}</h1>
        </div>
        <div className="product-details--information">
          <div className="product-details--image">
            <div className="product-image-container">
              <img
                alt={product[0].title}
                className="product-image"
                src={product[0].image}
              />
            </div>
            <button
              id={product[0].id}
              onClick={() => handleFavContext(product[0].id)}
              className="toggle-favourites"
            >
              <img
                alt=""
                className="fav-toggle-icon"
                src={
                  favContext.includes(product[0].id) ? heartSolid : heartRegular
                }
              />
            </button>
          </div>
          <p className="product-details--description">
            {product[0].description}
          </p>
        </div>
      </div>
    </>
  );
}
