import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchHelper";

export default function CategoryList({ handleCategoryClick, currentCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products/categories").then((result) => {
      setCategories(result);
    });
  }, []);

  const categoryList = categories.map((category) => {
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
  });
  return <div className="categories">{categoryList}</div>;
}
