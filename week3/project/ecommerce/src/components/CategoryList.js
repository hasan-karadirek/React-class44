import React, { useEffect, useState } from "react";
import fetchData from "../helpers/fetchHelper";
import useFetch from "../helpers/useFetch";

export default function CategoryList({
  handleCategoryClick,
  currentCategory,
  errorHandler,
}) {
  const [categories, loading] = useFetch(
    "https://fakestoreapi.com/products/categories",
    errorHandler
  );
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData("https://fakestoreapi.com/products/categories")
  //     .then((result) => {
  //       setCategories(result);
  //     })
  //     .catch((err) => errorHandler(err))
  //     .finally(setLoading(false));
  // }, []);
  console.log(categories, "category");

  const categoryList = categories
    ? categories.map((category) => {
        const categoryName = `FAKE: ${category}`;
        return (
          <div
            key={categories.indexOf(category)}
            onClick={handleCategoryClick}
            title={categoryName}
            className={`category--item ${
              categoryName === currentCategory ? "active" : ""
            }`}
          >
            {categoryName}
          </div>
        );
      })
    : [];
  return loading ? (
    <p>loading</p>
  ) : (
    <div className="categories">{categoryList}</div>
  );
}
