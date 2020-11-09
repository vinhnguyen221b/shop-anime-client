import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import dataService from "../services/dataService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import ProductItem from "./common/ProductItem";
import { apiEndPoint } from "../config.json";
import ScrollToTopOnMount from "./common/ScrollToTop";
function ProductsByCate(props) {
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [category, setCategory] = useState({});
  const getCategory = async () => {
    try {
      const { data } = await dataService.getCategoryById(props.match.params.id);
      setCategory(data);
    } catch (ex) {
      console.log(ex);
    }
  };
  const getProducts = async () => {
    try {
      const { data } = await dataService.getProductsByCategory(
        props.match.params.id
      );
      setProducts(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handlePageChange = (page) => {
    setPageIndex(page);
  };
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="categoryBanner">
        <img src={apiEndPoint + category.image} alt="" />
        <div className="categoryOverlay"></div>
        <div className="categoryText">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      </div>
      <div className="container">
        <div className="product-block list-products row">
          {products &&
            paginate(products, pageIndex, 8).map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-2 col-12"
                key={product._id}
              >
                <ProductItem product={product} />
              </div>
            ))}
        </div>
        <div className="d-flex justify-content-center my-3">
          <Pagination
            items={products.length}
            pageSize={8}
            currentPage={pageIndex}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsByCate;
