import React from "react";
import building1 from "./assets/building1.jpg";
import building2 from "./assets/building2.jpg";
import building3 from "./assets/building3.jpg";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { GiThermometerScale } from "react-icons/gi";
import { FiRepeat } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import "./content.css";
function Content() {
  return (
    <div>
      <div class="content-main">
        <div>
          <div class="floating-box">
            <p>
              <span class="bldng-title">Scandinavian style apartment</span>{" "}
              <br />
              <span class="address-main">
                94-98 Ingraham St, Brooklyn, NY 11237, USA
              </span>
            </p>
            <div class="items-count">
              <span class="bed">
                <BiBed /> Beds: 3
              </span>
              <span class="bath">
                <FaBath /> Baths: 2
              </span>
              <span class="meter">
                <GiThermometerScale /> Sq Ft: 900
              </span>
            </div>
            <div class="rent-bar">
              <div class="price-bar">
                <span class="price-txt">FOR RENT</span>
                <br />
                <span class="price">$54.000</span>
              </div>
              <div class="repeat-like">
                <FiRepeat class="repeat" />
                <AiOutlineHeart class="heart" />
              </div>
            </div>
          </div>
          <div>
            <img class="img-row-1" src={building1}></img>
          </div>

          <div class="img-row-2">
            <img class="sub-img-1" src={building1}></img>
            <img class="sub-img-2" src={building2}></img>
            <img class="sub-img-3" src={building3}></img>
          </div>
        </div>
        <div class="bldg-titles">
          <div class="buildinginfo-1">
            <p>
              <span class="bldng-title">Scandinavian style apartment</span>{" "}
              <br />
              <span class="address-main">
                94-98 Ingraham St, Brooklyn, NY 11237, USA
              </span>
            </p>
          </div>
          <div class="buildinginfo-2">
            <p>
              <span class="bldng-title">Lovelace Road Greenfield</span> <br />
              <span class="address-main">
                120 N St SW Thomaston, Georgia(GA), 30286
              </span>
            </p>
          </div>
          <div class="buildinginfo-3">
            <p>
              <span class="bldng-title">Building Complex Apartments</span>{" "}
              <br />
              <span class="address-main">
                319 Brookmeade Way Lawrenceville, Georgia(GA), 30043
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
