import React from "react";
import footerimage from "./assets/footerimage.jpg";
import "./footercenter.css";
function Footercenter() {
  return (
    <div>
      <div class="footer">
        <div class="footer-center-div">
          <div class="brand-logo">
            <div class="logo-part1">wp</div>
            <div class="logo-part2">/</div>
            <div class="logo-part3">Real Estate</div>
          </div>
          <div class="footer-nav">
            <a class="footer-home" href="#">
              HOME
            </a>
            <a class="footer-about" href="#">
              ABOUT
            </a>
            <a class="footer-agents" href="#">
              AGENTS
            </a>
            <a class="footer-properties" href="#">
              PROPERTIES
            </a>
            <a class="footer-blog" href="#">
              BLOG
            </a>
            <a class="footer-contact" href="#">
              CONTACT
            </a>
          </div>
        </div>
        <div class="house-foot"></div>
      </div>
    </div>
  );
}

export default Footercenter;
