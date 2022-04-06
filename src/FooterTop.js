import React from "react";
import "./footertop.css";

function FooterTop() {
  return (
    <div class="footer-main-div">
      <div class="footer-top-div-1">
        <p class="footer-title">Every thing is about to change.</p>
        <p class="footer-subject">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <div class="footer-top-div-2">
        <input
          class="email-input"
          type="text"
          placeholder="Email Address"
        ></input>
        <button class="subscribe-button" type="button">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default FooterTop;
