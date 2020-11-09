import http from "./httpService";
import { apiEndPoint } from "../config.json";
const apiCategory = apiEndPoint + "categories/";
const apiProduct = apiEndPoint + "products/";
const apiReview = apiEndPoint + "reviews/";

export function getAllCategories() {
  return http.get(apiCategory);
}

export function getCategoryById(id) {
  return http.get(apiCategory + id);
}

export function getAllProducts() {
  return http.get(apiProduct);
}

export function getProductDetails(id) {
  return http.get(apiProduct + id);
}

export function getProductsByCategory(categoryId) {
  return http.get(apiProduct + "cate/" + categoryId);
}

export function searchProduct(query) {
  return http.get(apiProduct + "search/?title=" + query);
}

export function getAllReviews() {
  return http.get(apiReview);
}

export function getReviewDetail(id) {
  return http.get(apiReview + id);
}

export function createReview(inputs) {
  const data = new FormData();
  data.append("title", inputs.title);
  data.append("categoryId", inputs.categoryId);
  data.append("thumbnail", inputs.thumbnail);
  data.append("content", inputs.content);
  return http.post(apiReview, data);
}

export default {
  getAllProducts,
  getProductDetails,
  getProductsByCategory,
  getAllCategories,
  getCategoryById,
  getAllReviews,
  getReviewDetail,
  searchProduct,
  createReview,
};
