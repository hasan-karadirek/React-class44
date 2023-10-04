import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetchHelper";
import { useState } from "react";
import useFetch from "../helpers/useFetch";
export default function ProductDetailPage({ errorHandler }) {
  const { id } = useParams();
  const [product, loading] = useFetch(
    `https://fakestoreapi.com/products/${id}`,
    errorHandler
  );
  // const [product, setProduct] = useState();
  // useEffect(() => {
  //   fetchData(`https://fakestoreapi.com/products/${id}`)
  //     .then((result) => setProduct(result))
  //     .catch((err) => errorHandler(err));
  // }, [id]);
  return loading ? (
    <p>loading</p>
  ) : (
    <div className="product-details">
      <div className="title-container">
        <h1 className="title-container--title">{product[0].title}</h1>
      </div>
      <div className="product-details--information">
        <div className="product-details--image">
          <div className="product-image-container">
            <img className="product-image" src={product[0].image} />
          </div>
        </div>
        <p className="product-details--description">{product[0].description}</p>
      </div>
    </div>
  );
}
