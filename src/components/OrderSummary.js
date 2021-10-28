import React from "react";
import musicLogo from "./icon-music.svg";

function OrderSummary() {
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-body">
          <div className="card-text">
            <h2 className="card-body-title">Order Summary</h2>
            <p className="card-body-paragraph">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="card-subscription">
            <div className="subscription-logo">
              <img src={musicLogo} alt="music logo" />
            </div>
            <div className="subscription-text">
              <h4>Annual Plan</h4>
              <p>$59.99/year</p>
            </div>
            <div className="subscription-button">
              <a className="card-subscription-button" href="#">
                Change
              </a>
            </div>
          </div>
          <div className="proceed">
            <a className="card-payment-button" href="#">
              Proceed to Payment
            </a>
          </div>
          <div className="cancel">
            <a className="card-cancel-button" href="#">
              Cancel Order
            </a>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default OrderSummary;
