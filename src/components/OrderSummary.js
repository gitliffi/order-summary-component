import React from "react";

function OrderSummary() {
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-body">
          <h2 className="card-title">Order Summary</h2>
          <p className="card-body">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="card-buttons">
          <div className="card-subscription">
            <p className="card-subscription-text">Annual Plan $59.99/year</p>
            <a className="card-subscription-button" href="#">
              Change
            </a>
          </div>
          <a className="card-payment-button" href="#">
            Proceed to Payment
          </a>
          <a className="card-cancel-button" href="#">
            Cancel Order
          </a>
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
