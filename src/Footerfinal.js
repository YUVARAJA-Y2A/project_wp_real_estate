import React from "react";
import "./footerfinal.css";
import { IoLogoDribbble } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
function Footerfinal() {
  return (
    <div class="footer-final-main">
      <div class="footer-final1">
        <IoLogoDribbble class="footer-final-icon1" size={20} />
        <FaFacebookF class="footer-final-icon2" size={20} />
        <FaTwitter class="footer-final-icon2" size={20} />
        <FaBehance class="footer-final-icon2" size={20} />
      </div>
      <div class="footer-final2">
        <a class="privacypolicy" href="#">
          PRIVACY POLICY
        </a>
        <p>|</p>
        <a class="termsandconditions" href="#">
          TERMS & CONDITIONS
        </a>
      </div>
    </div>
  );
}

export default Footerfinal;
