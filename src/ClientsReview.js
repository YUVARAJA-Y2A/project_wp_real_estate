import React from "react";
import "./clientsreview.css";
import face1 from "./assets/face1.jpg";
import face2 from "./assets/face2.jpg";
import face3 from "./assets/face3.jpg";
import face4 from "./assets/face4.jpg";
import face5 from "./assets/face5.jpg";
function ClientsReview() {
  return (
    <div>
      <div>
        <p class="client-rv-title">
          Our <span class="client-rv-part">Clients Review</span>
        </p>
      </div>
      <div class="name-position">
        <span class="person-name">Duane Neal</span>
        <br />
        <span class="person-position">Product Designer, USA</span>
      </div>
      <div class="person-comments">
        <p class="comments-main">
          <span class="quotation-mark">"</span>
          <span class="comments">
            I'm a freelance fashion designer who specialises in print designs
            and combining fabrics. My designs have been sold all over Europe and
            the USA and I have worked with some of the biggest designers in the
            industry. i'm also currently working with a big supermarket to
            develop a gorgeous, yet affordable
          </span>
        </p>
      </div>
      <div class="bottom-line-main"></div>
      <div class="profiles">
        <img class="pic1" src={face1}></img>

        <img class="pic2" src={face2}></img>

        <img class="pic3" src={face3}></img>

        <img class="pic4" src={face4}></img>

        <img class="pic5" src={face5}></img>
      </div>
    </div>
  );
}

export default ClientsReview;
