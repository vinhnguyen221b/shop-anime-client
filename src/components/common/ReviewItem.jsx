import React from "react";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../../config.json";
function ReviewItem({ review }) {
  return (
    <div className="col-lg-4 col-sm-6 col-12 reviews-item">
      <div className="reviews-item-content">
        <img src={apiEndPoint + review.thumbnail} alt="" />
        <div className="reviews-content-text">
          <h5 className="reviews-title">{review.title}</h5>
          <p className="reviews-desc"></p>
          <Link to={`review/${review._id}`}>
            Explore <i className="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
