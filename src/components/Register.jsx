import validate from "../utils/validate";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../services/authService";
import Joi from "joi-browser";

function Register(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const userInputs = { ...inputs };
    userInputs[e.currentTarget.name] = e.currentTarget.value;
    setInputs(userInputs);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const schema = {
      email: Joi.string()
        .required()
        .label("Email")
        .email(),
      password: Joi.string()
        .required()
        .label("Password"),
      name: Joi.string()
        .required()
        .label("Username"),
      phone: Joi.string()
        .required()
        .label("Phone number"),
    };
    const userErrors = validate(inputs, schema);
    setError(userErrors);
    try {
      const { headers } = await auth.register(inputs);
      const jwt = headers["x-auth-token"];
      auth.loginWithJwt(jwt);
      window.location = "/";
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };
  return (
    <div className="container loginForm">
      <ToastContainer autoClose={1000} />
      <div className="row justify-content-center">
        <div className="col-12 text-center loginTitle">REGISTER USER</div>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {error && error.email && (
                <div className="alert" role="alert">
                  {error.email}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              {error && error.password && (
                <div className="alert" role="alert">
                  {error.password}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
              />
              {error && error.name && (
                <div className="alert" role="alert">
                  {error.name}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                onChange={handleChange}
              />
              {error && error.name && (
                <div className="alert" role="alert">
                  {error.name}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-login">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
