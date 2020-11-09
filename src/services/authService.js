import http from "./httpService";
import { apiEndPoint } from "../config.json";
// import jwtDecode from "jwt-decode";

const tokenKey = "token";

const api = apiEndPoint + "users/";
http.setJwt(getJwt());
export async function login({ email, password }) {
  const { data: jwt } = await http.post(api + "auth", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function register({ email, password, name, phone }) {
  return http.post(api + "create", { email, password, name, phone });
}

export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export async function getCurrentUser() {
  try {
    const { data: user } = await http.get(api + "isValid");
    return user;
  } catch (ex) {
    return null;
  }
}

export function getUserInfo() {
  return http.get(api + "me");
}

export function editMe(inputs) {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const data = new FormData();
  data.append("phone", inputs.phone);
  data.append("address", inputs.address);
  data.append("avatar", inputs.avatar);
  return http.put(api, data, config);
}

export default {
  getCurrentUser,
  login,
  logout,
  register,
  loginWithJwt,
  getUserInfo,
  editMe,
};
