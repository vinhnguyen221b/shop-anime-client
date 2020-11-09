import React from "react";

function About(props) {
  return (
    <div className="about-page container">
      <div className="row justify-content-center">
        <div className="col-10">
          {" "}
          <h3>About Anime Store</h3>
          <p>
            Hi, My name is The Vinh. Anime Store is my first <b>MERN</b> Stack{" "}
            <span style={{ color: "#f3ce13" }}>
              (MongoDB, ExpressJS, ReactJS, NodeJS)
            </span>{" "}
            project.
          </p>
          <p> There are two sites belong to this project:</p>
          <ul>
            <li>
              <span style={{ color: "#f3ce13", fontWeight: "bold" }}>
                Client Page
              </span>{" "}
              : An online store, where users can sign up for a new account, or
              sign in with an available account. They can view, search for the
              anime they want, look in for the details, and buy DVDs. In
              addition, user can read the reviews about anime, or post their own
              review
            </li>
            <li>
              <span style={{ color: "#f3ce13", fontWeight: "bold" }}>
                Admin Page
              </span>{" "}
              : The admin use this page to manage data for client page{" "}
              <a
                href="https://shop-anime-admin.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Admin Page <i class="fas fa-arrow-circle-right"></i>
              </a>
            </li>
          </ul>
          <p style={{ color: "red", fontSize: "20px" }}>
            NOTE: I have just finished about 85% of the client site of this
            project, the incomplete part is order DVD or when you add to cart, I
            have some trouble with my back-end code to process the order, and
            cart
            <br />I try to finish it as soon as possible. I really sorry for
            this inconvenience
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
