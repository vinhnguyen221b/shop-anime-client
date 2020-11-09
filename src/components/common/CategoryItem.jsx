import React from "react";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../../config.json";
function CategoryItem({ category }) {
  return (
    <div className="col-lg-4 col-sm-6 col-12 category-block-item">
      <div className="category-image">
        <Link to="">
          <img src={apiEndPoint + category.thumbnail} alt="" />
        </Link>
      </div>
      <div className="overlay"></div>
      <div className="category-text">
        <h5>{category.name}</h5>
        {/* <p>15 movies</p> */}
        <Link to={`/category/${category._id}`}>
          Explore <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
