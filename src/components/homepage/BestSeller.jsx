import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import ProductItem from "../common/ProductItem";
function BestSeller({ products }) {
  const [bestSeller, setBestSeller] = useState([]);
  const getBestSeller = () => {
    setBestSeller(products.filter((prod) => prod.numberSold >= 5));
  };
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getBestSeller();
  }, [products]);
  return (
    <div id="bestseller" className="bestseller-block">
      <div className="block-title">
        <h2>Bestseller</h2>
        <hr className="block-title-line" />
      </div>
      <div className="product-block bestseller-products">
        <Slider {...settings}>
          {bestSeller.map((item) => (
            <ProductItem product={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BestSeller;
