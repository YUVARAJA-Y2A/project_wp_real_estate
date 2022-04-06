import React from "react";
import money_machine from "./assets/money_machine.png";
import liquid from "./assets/liquid.png";
import synartec from "./assets/synertec.png";
import dropawfjpg from "./assets/dropawfjpg.jpg";
import follow from "./assets/follow.jpg";
import "./bannerad.css";

function BannerAd() {
  return (
    <div class="banner-ad">
      <img class="img1" src={money_machine}></img>
      <img class="img2" src={liquid}></img>
      <img class="img3" src={synartec}></img>
      <img class="img4" src={dropawfjpg}></img>
      <img class="img5" src={follow}></img>
    </div>
  );
}

export default BannerAd;
