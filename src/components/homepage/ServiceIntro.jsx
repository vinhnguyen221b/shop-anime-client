import React from "react";

function ServiceIntro() {
  return (
    <div className="static-service-intro d-none d-md-flex row">
      <div className="service-intro-box col-4 d-flex flex-row">
        <div className="service-intro-icon">
          <span>
            <i className="fas fa-shipping-fast"></i>
          </span>
        </div>

        <div className="service-intro-text">
          <p>Free Shipping</p>
          <span>On all orders over $75.00</span>
        </div>
      </div>

      <div className="service-intro-box col-4 d-flex flex-row">
        <div className="service-intro-icon">
          <span>
            <i className="fas fa-shield-alt"></i>
          </span>
        </div>

        <div className="service-intro-text">
          <p>100% Payment Secure</p>
          <span>Your payment are safe </span>
        </div>
      </div>
      <div className="service-intro-box col-4 d-flex flex-row">
        <div className="service-intro-icon">
          <span>
            <i className="fas fa-phone-square-alt"></i>
          </span>
        </div>
        <div className="service-intro-text">
          <p>Support 24/7</p>
          <span>Contact us 24 hours a day</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceIntro;
