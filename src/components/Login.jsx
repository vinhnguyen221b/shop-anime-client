import validate from "../utils/validate";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../services/authService";
import Joi from "joi-browser";

function Login(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
    };
    const userErrors = validate(inputs, schema);
    setError(userErrors);
    try {
      await auth.login(inputs);
      toast.success("Login Success");
      setTimeout(() => (window.location = "/"), 1000);
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
        <div className="col-12 text-center loginTitle">LOGIN USER</div>
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

            <button type="submit" className="btn btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
