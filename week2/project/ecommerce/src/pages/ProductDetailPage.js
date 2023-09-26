import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helpers/fetchHelper";
import { useState } from "react";
export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products/${id}`).then((result) =>
      setProduct(result)
    );
  }, [id]);
  return !product ? (
    "loading"
  ) : (
    <div className="product-details">
      <div className="title-container">
        <h1 className="title-container--title">{product.title}</h1>
      </div>
      <div className="product-details--information">
        <div className="product-details--image">
          <div className="product-image-container">
            <img className="product-image" src={product.image} />
          </div>
        </div>
        <p className="product-details--description">{product.description}</p>
      </div>
    </div>
  );
}
