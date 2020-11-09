import React from "react";
import CategoryItem from "../common/CategoryItem";

function CategoryList({ categories }) {
  return (
    <div id="category" className="category-block">
      <div className="block-title">
        <h2>Popular Categories</h2>
        <hr className="block-title-line" />
      </div>
      <div className="category-block-content">
        <div className="row">
          {categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
