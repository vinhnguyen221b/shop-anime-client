import React from "react";
import { Link, NavLink } from "react-router-dom";
import authService from "../../services/authService";
function Header({ user }) {
  const handleLogout = () => {
    authService.logout();
    window.location = "/";
  };
  return (
    <>
      <header>
        <nav className="container navbar navbar-expand-lg">
          <Link className="navbar-brand py-0" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
              height="50px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="fas fa-angle-double-down"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item line">
                <NavLink className="nav-link" id="home" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              {!user ? (
                <li className="nav-item line d-flex justify-content-center align-items-center">
                  <Link id="navLoginBtn" to="/login">
                    <i className="fas fa-sign-in-alt"></i>
                    Login
                  </Link>
                  <Link id="navRegisterBtn" to="/register">
                    <i className="fas fa-sign-in-alt"></i>
                    Register
                  </Link>
                </li>
              ) : (
                <li className="nav-item line d-flex justify-content-center align-items-center">
                  <div className="dropdown show">
                    <span
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.name}
                      <span
                        style={{
                          marginLeft: "5px",
                          color: "white",
                          fontSize: "24px",
                        }}
                      >
                        <i className="fas fa-sort-down"></i>
                      </span>
                    </span>

                    <Link className="shopping-cart" to="/shopping-cart">
                      <i className="fas fa-shopping-cart"></i>
                      <span className="numberInCart">0</span>
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/me">
                        Details
                      </Link>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Log out
                      </button>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
