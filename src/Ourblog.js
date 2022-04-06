import React from "react";
import "./ourblog.css";
import house1 from "./assets/house1.webp";
import house2 from "./assets/house2.jpg";
import house3 from "./assets/house3.jpg";
import house4 from "./assets/house4.jpg";
import house5 from "./assets/house5.jpg";

function Ourblog() {
  return (
    <div>
      <div class="title-blog">
        <p class="our-blog">
          Our<span class="blog"> Blog</span>
        </p>
      </div>
      <div class="house-images">
        <div class="house-img-col1">
          <div class="house1-text-div">
            <p class="house1-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div class="bottom-line"></div>
            <p class="house1-date">13 March, 2020</p>
            <p class="house1-subject">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text.It has roots in a piece of classical Latin literature from
            </p>
          </div>
          <div class="house2"></div>
        </div>
        <div class="house-img-col2">
          <div class="house-img-col2-row1">
            <div class="house2-set">
              <div class="house2-text-div">
                <p class="house2-title">
                  There are many variations of passages of Lorem Ipsum
                </p>
                <div class="bottom-line"></div>
                <p class="house2-date">13 March, 2020</p>
              </div>
              <div class="house1">}</div>
            </div>
            <div class="house3-set">
              <div class="house3-text-div">
                <p class="house3-title">
                  There are many variations of passages of Lorem Ipsum
                </p>
                <div class="bottom-line"></div>
                <p class="house3-date">13 March, 2020</p>
              </div>
              <div class="house3"></div>
            </div>
          </div>
          <div class="house-img-col2-row2">
            <div class="house4-set">
              <div class="house4-text-div">
                <p class="house4-title">
                  There are many variations of passages of Lorem Ipsum
                </p>
                <div class="bottom-line"></div>
                <p class="house4-date">13 March, 2020</p>
              </div>
              <div class="house4"></div>
            </div>
            <div class="house5-set">
              <div class="house5-text-div">
                <p class="house5-title">
                  There are many variations of passages of Lorem Ipsum
                </p>
                <div class="bottom-line"></div>
                <p class="house5-date">13 March, 2020</p>
              </div>
              <div class="house5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourblog;
