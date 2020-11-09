import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dataService from "../services/dataService";
import { apiEndPoint } from "../config.json";
import ScrollToTopOnMount from "./common/ScrollToTop";
import { useContext } from "react";
import UserContext from "../context/userContext";
import { Link } from "react-router-dom";
function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const currentUser = useContext(UserContext);
  const getProduct = async () => {
    const { data } = await dataService.getProductDetails(props.match.params.id);
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="container">
        <div className="detail-intro row justify-content-center">
          <div className="detail-title col-sm-10 col-12">
            <h2>
              {product.title} ({product.release})
            </h2>
            <span style={{ marginRight: "5px" }}>Author: {product.author}</span>{" "}
            |
            <span style={{ marginLeft: "10px" }}>
              <i className="fas fa-hourglass-half"></i> &nbsp;
              {product.duration} min
            </span>
          </div>
          <div className="detail-score col-sm-2 col-12 row align-items-center">
            <p className="imdb">IMDB</p>
            <p className="imdbScore">{product.imdb}</p>
          </div>
        </div>
        <div className="detail-media row justify-content-center">
          <div className="poster col-lg-4 col-12">
            <img src={apiEndPoint + product.poster} alt="" />
          </div>
          <div className="trailer col-lg-6 col-12">
            <iframe
              width="100%"
              height="360"
              id="iframeTrailer"
              src={product.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="detail-desc">
          <h4>Storyline</h4>
          <p>{product.storyline}</p>
        </div>
        <div className="detail-cart">
          {currentUser ? (
            <button data-toggle="modal" data-target="#modalError">
              <i
                className="fas fa-shopping-basket"
                style={{ marginRight: "10px" }}
              ></i>
              Add to cart
            </button>
          ) : (
            <Link to="/login">
              <i
                className="fas fa-shopping-basket"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Add to cart
            </Link>
          )}
        </div>
      </div>
      {/* <ModalError /> */}
    </>
  );
}

export default ProductDetail;
