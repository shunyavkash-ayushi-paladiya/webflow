
import { Block } from "@/devlink/_Builtin";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
return (
  <Block className="hero-section">
    <div className="container">
      <div className="hero-content">
        <p className="hero-title">From vine to glass</p>
        <h1 className="hero-main-title">
          Handpicked grapes, exceptional wine quality
        </h1>
        <a href="#" className="btn btn-v2">
          <p className="btn-text">Explore Product</p>
          <div className="btn-arrow-wrapper">
            <GoArrowRight className="btn-arrow" />
            <GoArrowRight className="btn-arrow-v2" />
          </div>
        </a>
      </div>
    </div>
  </Block>
);
};

export default Hero;
