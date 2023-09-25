import React from "react";
import categories from "../fake-data/all-categories";

export default function CategoryList({ handleCategoryClick, currentCategory }) {
  const categoryList = categories.map((category) => {
    return (
      <div
        key={categories.indexOf(category)}
        onClick={handleCategoryClick}
        title={category}
        className={`category--item ${
          category === currentCategory ? "active" : ""
        }`}
      >
        {category}
      </div>
    );
  });
  return <div className="categories">{categoryList}</div>;
}
