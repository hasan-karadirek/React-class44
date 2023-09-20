import React from "react";
import categories from "../fake-data/all-categories";

export default function CategoryList({ handleCategoryClick }) {
  const categoryList = categories.map((category) => {
    return (
      <div
        onClick={handleCategoryClick}
        title={category}
        className="category--item"
      >
        {category}
      </div>
    );
  });
  return <div className="categories">{categoryList}</div>;
}
