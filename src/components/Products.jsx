import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dataService from "../services/dataService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import ProductItem from "./common/ProductItem";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ query: "", category: "" });
  const filterData = (products) => {
    if (filter.category !== "") {
      return products.filter((item) => item.category._id === filter.category);
    }
    return products;
  };
  const getProducts = async () => {
    try {
      const { data } = await dataService.getAllProducts();
      setProducts(filterData(data));
    } catch (ex) {
      console.log(ex);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await dataService.getAllCategories();
      setCategories(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSearch = async () => {
    try {
      const { data } = await dataService.searchProduct(filter.query);
      setProducts(filterData(data));
    } catch (ex) {
      console.log(ex);
    }
  };

  const handlePageChange = (page) => {
    setPageIndex(page);
  };
  useEffect(() => {
    getCategories();
    getProducts();
  }, [filter]);
  return (
    <div className="container">
      <div className="product-intro">
        <h3>We offer all the best Japanese animes </h3>
      </div>
      <div className="product-filter row">
        <div className="text-search col-sm-4 col-12">
          <input
            type="text"
            name="query"
            onChange={(e) =>
              setFilter({ ...filter, query: e.currentTarget.value })
            }
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="category-search col-sm-4 col-12">
          <select
            name="category"
            id=""
            onChange={(e) =>
              setFilter({ ...filter, category: e.currentTarget.value })
            }
          >
            <option value="">All category</option>
            {categories.map((cate) => (
              <option key={cate._id} value={cate._id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
      </div>

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
  );
}

export default Products;
