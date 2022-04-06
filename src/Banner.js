import React from "react";
import bg_image from "./assets/bg_image.png";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div class="nav-3">
        <img class="bg-image" src={bg_image}></img>
        <div class="body-text">
          <span class="text-1">if you can dream, we can create it</span>
          <br />
          <span class="text-2">Find your house without any difficulties</span>
          <div class="button">
            <a class="button-know_more" href="#">
              Know More
            </a>
          </div>
        </div>
        <div class="page-navigation">01 | 05</div>
      </div>
    </div>
  );
}

export default Banner;
