import React, { useState } from "react";
import allProducts from "../fake-data/all-products";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState();
  const [productSet, setProductSet] = useState(allProducts);
  const handleCategoryClick = (event) => {
    const categoryName = event.target.title.replace("FAKE: ", "");
    if (!(currentCategory === categoryName)) {
      const products = allProducts.filter(
        (product) => product.category === categoryName
      );
      setProductSet(products);
      setCurrentCategory(event.target.title);
    }
  };
  return (
    <>
      <Header />
      <CategoryList
        handleCategoryClick={handleCategoryClick}
        currentCategory={currentCategory}
      />
      <ProductList productSet={productSet} />
    </>
  );
}
