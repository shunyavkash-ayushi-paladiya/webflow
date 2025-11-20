import React from "react";
import { GoArrowRight } from "react-icons/go";
import CounterAnimation from '../components/CounterAnimation'; 

export default function About() {
return (
  <>
    <section className="about-section">
      <div className="container-v2">
        <img
          src="img.svg"
          className="about-img-1" draggable="false"/>
        <img
          src="https://ik.imagekit.io/fa1ylzjml/685e19ced840f55151a82631_flower-image-2.svg?updatedAt=1759907831778"
          className="about-img-2" draggable="false"
        />
        <div className="about-content">
          <div className="about-content-v1">
            <img
              className="about-content-img"
              src="https://ik.imagekit.io/fa1ylzjml/685e19ced840f55151a82626_about-image-1-p-800.webp?updatedAt=1759907831774"
            />
            <p className="abour-content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eu turpis et quam auctor bibendum etivitae arcu. Etiam mollis
              leoiat lorem placerat aliquet nisi aliquam praesent mauris.
            </p>
            <a href="#" className="btn btn-v2">
              <p className="btn-text">Discover More</p>
              <div className="btn-arrow-wrapper">
                <GoArrowRight className="btn-arrow" />
                <GoArrowRight className="btn-arrow-v2" />
              </div>
            </a>
          </div>
          <div className="about-content-v2">
            <h3 className="about-content-title">About Us</h3>
            <h4 className="about-content-head">
              Where our winery story begins
            </h4>
            <img
              src="https://ik.imagekit.io/fa1ylzjml/685e19ced840f55151a8262c_about-image-2-p-800.webp?updatedAt=1759907831778"
              className="about-content-img-2"
            />
          </div>
        </div>
        <div className="about-counters">
          <div className="about-counter">
              <CounterAnimation endValue={25} suffix="+" />
              <p className="counter-description">
                  Years of winemaking excellence
              </p>
          </div>
          
          <div className="about-counter">
              <CounterAnimation endValue={100} suffix="%" />
              <p className="counter-description">
                  Handpicked grapes for every bottle
              </p>
          </div>
          
          <div className="about-counter about-counter-v2">
              <CounterAnimation endValue={50} suffix="M" />
              <p className="counter-description">
                  Bottles produced annually
              </p>
          </div>
      </div>
      </div>
    </section>
  </>
);
}
