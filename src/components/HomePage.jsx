import React, { useState } from "react";
import { useEffect } from "react";
import dataService from "../services/dataService";
import Banner from "./homepage/Banner";
import BestSeller from "./homepage/BestSeller";
import CategoryList from "./homepage/CategoryList";
import ReviewList from "./homepage/ReviewList";
import ServiceIntro from "./homepage/ServiceIntro";

function HomePage(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await dataService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    try {
      const { data } = await dataService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getReviews = async () => {
    try {
      const { data } = await dataService.getAllReviews();
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
    getCategories();
    getReviews();
  }, []);
  return (
    <>
      <Banner />
      <div className="home-content">
        <div className="container">
          <ServiceIntro />
          <BestSeller products={products} />
          <CategoryList categories={categories} />
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
