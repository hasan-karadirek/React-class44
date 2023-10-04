import React, { useState } from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import { CustomContextProvider } from "../context/FavouritesContext.js";

export default function HomePage({ errorHandler }) {
  const [currentCategory, setCurrentCategory] = useState("all");

  const handleCategoryClick = (event) => {
    if (!(currentCategory === event.target.title)) {
      setCurrentCategory(event.target.title);
    }
  };
  return (
    <>
      <Header />
      <CategoryList
        errorHandler={errorHandler}
        handleCategoryClick={handleCategoryClick}
        currentCategory={currentCategory}
      />
      <CustomContextProvider>
        <ProductList
          errorHandler={errorHandler}
          currentCategory={currentCategory}
        />
      </CustomContextProvider>
    </>
  );
}
