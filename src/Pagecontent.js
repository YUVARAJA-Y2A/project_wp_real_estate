import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./pagecontent.css";
import manimage from "./assets/manimage.png";
import sign from "./assets/sign.jpg";

function Pagecontent() {
  return (
    <div>
      <div class="add-circle">
        <AiFillPlusCircle class="add" size={40} />
        <p class="view-more">VIEW MORE</p>
      </div>
      <div class="client-rev">
        <div class="rev-main">
          <p class="client-rev-title">
            Beautifully designed, inside and out, Studio looks every bit as
            powerful as it is.
          </p>
          <p class="client-rev-comments">
            People expect testimonial pages to be little more than a sales
            pitch. And while everyone wants to see what previous customers think
            of your services, they don’t want to feel force-fed something that
            might not be as authentic as you think it is.{" "}
          </p>
          <img class="signature" src={sign}></img>
        </div>
        <img class="man-image" src={manimage}></img>
      </div>
    </div>
  );
}

export default Pagecontent;
