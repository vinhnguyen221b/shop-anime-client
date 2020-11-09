import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";
import NotFound from "./components/homepage/NotFound";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import ProductsByCate from "./components/ProductsByCate";
import ReviewDetail from "./components/ReviewDetail";
import authService from "./services/authService";

import Register from "./components/Register";
import About from "./components/About";
import UserInfo from "./components/UserInfo";
import UserContext from "./context/userContext";
import ModalError from "./components/common/ModalError";

function App() {
  const [user, setUser] = useState();
  const getUser = async () => {
    const user = await authService.getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <UserContext.Provider value={user}>
      <div className="wrapper">
        <Header user={user} />

        <Switch>
          <Route
            path="/login"
            render={(props) => (user ? <HomePage {...props} /> : <Login />)}
          />
          <Route
            path="/register"
            render={(props) => (user ? <HomePage {...props} /> : <Register />)}
          />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products/" component={Products} />
          <Route path="/category/:id" component={ProductsByCate} />
          <Route path="/review/:id" component={ReviewDetail} />
          <Route path="/about" component={About} />
          <Route path="/me" render={() => (user ? <UserInfo /> : <Login />)} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" render={(props) => <HomePage {...props} />} />
          <Redirect to="not-found" />
        </Switch>

        <Footer />
        <ModalError />
      </div>
    </UserContext.Provider>
  );
}

export default App;
