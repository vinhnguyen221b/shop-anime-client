import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-sm-6 col-12 about text-center">
            <div className="footerLogo">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
            </div>
            <p>
              We provide the latest Japanese animation DVDs, with full HD images
              and high-quality sound. We have more than 20 best seller DVDs to
              give you the best experience with family and friends. Our website
              also has a review section, where you can read many reviews of our
              user about their feeling and you can post your own review
            </p>
          </div>
          <div className="col-sm-6 col-12 contact text-center">
            <h5>Contact</h5>
            <p>
              <i className="fas fa-phone"></i> &nbsp;&nbsp;0373355731
            </p>
            <p>
              <Link to="/">
                <i className="fas fa-envelope-square"></i>
                &nbsp;&nbsp;vinhguyen221b@gmail.com
              </Link>
            </p>
            <p>
              <i className="fas fa-street-view"></i> &nbsp;&nbsp;Lac Long Quan,
              Tan Binh
            </p>
            <p>
              <a
                href="https://vinhnguyen221b.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe-americas"></i>
                &nbsp;&nbsp;https://vinhnguyen221b.herokuapp.com/
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="copyright-line" />
      <div className="copyright">
        <p>Vinh Nguyen | 2020 | Demo Website</p>
      </div>
    </footer>
  );
}

export default Footer;
