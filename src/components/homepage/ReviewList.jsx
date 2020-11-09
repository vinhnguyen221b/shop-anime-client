import React from "react";
import Pagination from "../common/Pagination";
import ReviewItem from "../common/ReviewItem";
import { paginate } from "../../utils/paginate";
import { useState } from "react";
import FormReview from "../common/FormReview";

function ReviewList({ reviews }) {
  const [pageIndex, setPageIndex] = useState(1);
  const handlePageChange = (page) => {
    setPageIndex(page);
  };
  return (
    <div className="reviews-block">
      <div className="block-title">
        <h2>Anime reviews</h2>
        <hr className="block-title-line" />
      </div>
      <div className="row">
        {paginate(reviews, pageIndex, 6).map((review) => (
          <ReviewItem review={review} key={review._id} />
        ))}
      </div>
      <div className="reviewPagination">
        <Pagination
          items={reviews.length}
          pageSize={6}
          currentPage={pageIndex}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="reviewBtn">
        <FormReview />
      </div>
    </div>
  );
}

export default ReviewList;
