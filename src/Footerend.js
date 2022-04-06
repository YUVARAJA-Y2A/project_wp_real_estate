import React from "react";
import "./footerend.css";
import icon1 from "./assets/icon1.jpg";
import icon2 from "./assets/icon2.png";
function Footerend() {
  return (
    <div>
      <div class="footer-things">
        <div class="about-footer">
          <p class="footer-titles">ABOUT</p>
          <a class="footer-col1-row1" href="#">
            ABOUT STUDIO
          </a>
          <a class="footer-col1-row2" href="#">
            JOBS
          </a>
          <a class="footer-col1-row3" href="#">
            TEAM
          </a>
          <a class="footer-col1-row4" href="#">
            SECURITY
          </a>
        </div>
        <div class="information-footer">
          <p class="footer-titles">INFORMATION</p>
          <a class="footer-col2-row1" href="#">
            CUSTOMER SERVICE
          </a>
          <a class="footer-col2-row2" href="#">
            LEGAL INFORMATION
          </a>
          <a class="footer-col2-row3" href="#">
            SUPPORT
          </a>
          <a class="footer-col2-row4" href="#">
            FAQ
          </a>
        </div>
        <div class="recentnews-footer">
          <p class="footer-titles">RECENT NEWS</p>
          <div class="icon-set-1">
            <img class="icon1-img" src={icon1}></img>
            <div>
              <p class="icon1-text">
                Proin eros nisl, ornare sed vehicula sit amet, feugiat
              </p>
              <p class="icon1-date">Aug 12 | 2017</p>
            </div>
          </div>
          <div class="icon-set-1">
            <img class="icon1-img" src={icon2}></img>
            <div>
              <p class="icon1-text">
                Morbi placerat accumsan nunc, luctus lacinia nisi
              </p>
              <p class="icon1-date">Aug 12 | 2017</p>
            </div>
          </div>
        </div>
        <div class="getintouch-footer">
          <p class="footer-titles">GET IN TOUCH</p>
          <li class="footer-address">
            San Fransisco, CA
            <br />
            <span class="spacing" />
            125, California, STP 2 Building
          </li>
          <li class="footer-webpage">www.studiotheme.com</li>
          <li class="footer-mobileno">+ 123 5645 8934</li>
        </div>
      </div>
    </div>
  );
}

export default Footerend;
