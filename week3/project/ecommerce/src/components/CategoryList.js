import React from "react";

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
