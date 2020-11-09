import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import authService from "../services/authService";
import { apiEndPoint } from "../config.json";
import FormUserEdit from "./common/FormUserEdit";
import { ToastContainer } from "react-toastify";

function UserInfo(props) {
  const [user, setUser] = useState({});
  const getUser = async () => {
    try {
      const { data } = await authService.getUserInfo();
      setUser(data);
    } catch (error) {
      console.log("Fail to load user info");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="user-info container">
      <ToastContainer autoClose={2000} />
      <div className="row justify-content-center">
        <div className="col-10">
          <h3>
            Welcome back, <span style={{ color: "#f3ce13" }}>{user.name}</span>{" "}
          </h3>
          <img src={apiEndPoint + user.avatar} alt="Avatar" />
          <p>Your info:</p>
          <ul>
            <li>
              <span style={{ color: "rgb(17, 236, 229)" }}>Email</span>:{" "}
              {user.email}
            </li>
            <li>
              <span style={{ color: "rgb(17, 236, 229)" }}>Address</span>:{" "}
              {user.address}
            </li>
            <li>
              <span style={{ color: "rgb(17, 236, 229)" }}>Phone</span>:{" "}
              {user.phone}
            </li>
          </ul>
          <FormUserEdit user={user} />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
