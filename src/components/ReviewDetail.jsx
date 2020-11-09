import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dataService from "../services/dataService";
import parse from "html-react-parser";
import ScrollToTopOnMount from "./common/ScrollToTop";

function ReviewDetail(props) {
  const [review, setReview] = useState({});
  const getReview = async () => {
    const { data: reviewDetail } = await dataService.getReviewDetail(
      props.match.params.id
    );
    console.log(props.match.params.id);
    console.log(reviewDetail);
    setReview(reviewDetail);
  };
  useEffect(() => {
    getReview();
  }, []);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="container mx-auto m-2">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <h1 style={{ color: "white" }}>{review.title}</h1>
            <p style={{ color: "white", fontStyle: "italic" }}>
              {review.user && review.user.name}
            </p>
          </div>
          <div className="col-8 reviewDetail">
            {review.content && parse(review.content)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewDetail;
