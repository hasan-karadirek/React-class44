import React, { useContext, useState } from "react";
import ProductList from "../components/ProductList";
import {
  CustomContextProvider,
  FavouritesContext,
  useFavouritesContext,
} from "../context/FavouritesContext.js";

export default function FavouritesPage({ errorHandler }) {
  return (
    <>
      <ProductList errorHandler={errorHandler} />
    </>
  );
}
