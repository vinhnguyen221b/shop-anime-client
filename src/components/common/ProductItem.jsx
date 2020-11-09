import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../../config.json";
import UserContext from "../../context/userContext";
function ProductItem({ product }) {
  const currentUser = useContext(UserContext);
  return (
    <>
      <div className="product-item">
        <div className="product-overlay d-none d-lg-block">
          <div className="product-overlay-search">
            <Link to={`/products/${product._id}`}>
              <i className="far fa-arrow-alt-circle-right"></i>Details
            </Link>
          </div>
          <div className="product-overlay-buy">
            {currentUser ? (
              <button data-toggle="modal" data-target="#modalError">
                <i className="fas fa-cart-arrow-down"></i>Buy it
              </button>
            ) : (
              <Link to="/login">
                <i className="fas fa-cart-arrow-down"></i>Buy it
              </Link>
            )}
          </div>
        </div>
        <div className="product-img">
          <Link
            to={`/products/${product._id}`}
            className="product-img-thumbmnail"
          >
            <img src={apiEndPoint + product.thumbnail} alt="Product 1" />
          </Link>
        </div>
        <div className="product-desc">
          <h6 className="product-provider">{product.author}</h6>
          <h4 className="product-title">
            {product.title + " (" + product.release + ")"}
          </h4>
          <div className="product-review">
            <span className="review-star">
              <i className="fas fa-star"></i>
            </span>
            <span className="review-star">
              <i className="fas fa-star"></i>
            </span>
            <span className="review-star">
              <i className="fas fa-star"></i>
            </span>
            <span className="review-star">
              <i className="fas fa-star"></i>
            </span>
            <span className="review-star">
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="product-price">${product.price}</div>
          <div className="product-btn d-flex d-lg-none">
            <div className="product-btn-search">
              <Link to={`/products/${product._id}`}>
                <i className="far fa-arrow-alt-circle-right"></i>Details
              </Link>
            </div>
            <div className="product-btn-buy">
              {currentUser ? (
                <button data-toggle="modal" data-target="#modalError">
                  <i className="fas fa-cart-arrow-down"></i>Buy it
                </button>
              ) : (
                <Link to="/login">
                  <i className="fas fa-cart-arrow-down"></i>Buy it
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
