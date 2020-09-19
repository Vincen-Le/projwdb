import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import logo from "./berkeley-logo.png";
import skyline from "./berkeley-skyline.png";
import rberkeley from "./berkeley.png";
import pubuni from "./pubuni.png";
import "./HeaderCard.css";
import { Link } from "react-router-dom";
/**
 * Creates the header card that holds the Berkeley image and
 * Berkeley logo with r/Berkeley
 */
const HeaderCard = () => {
  return (
    <div>
      <img src={skyline} alt="skyline" className="skyline" />
      <div className="home-title">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="rberkeley">R/BERKELEY</div>
        <div className="pubuni"># 1 PUBLIC UNIVERSITY IN THE WORLD</div>
      </div>
    </div>
  );
};

export default HeaderCard;
