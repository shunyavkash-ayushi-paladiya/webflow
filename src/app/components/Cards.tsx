import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Cards() {
return (
  <>
    <section className="cards-section">
      <div className="container-v2">
        <div className="cards-wrapper">
          <div className="card-img-content">
            <img
              src="https://ik.imagekit.io/fa1ylzjml/685e1a47e059aeefabea1f7d_offer-image-1-p-800.webp?updatedAt=1759917362329"
              className="card-img"
            />
            <div className="card-img-content-v1">
              <div className="card-label">
                  <h3 className="label">This week only!</h3>
                  </div>
              <h2 className="card-title">Limited-time wine offers</h2>
              <a href="#" className="card-btn">
                  Shop Now 
                  <div className="card-icon">
                    <MdKeyboardArrowRight className="card-icon-svg"/>
                    <MdKeyboardArrowRight className="card-icon-svg-v2"/>
                  </div>
              </a>
            </div>
          </div>
          <div className="cards-img-content">
            <div className="card-img-content">
              <img
                src="https://ik.imagekit.io/fa1ylzjml/685e1a47e059aeefabea1f85_offer-image-2-p-800.webp?updatedAt=1759917362374"
                className="card-img"
              />
                <div className="card-img-content-v2">
              <div className="card-label-v2">
                  <h3 className="label">15% off this week!</h3>
                  </div>
              <h2 className="card-title">Red wine lovers <span>rejoice</span></h2>
              <a href="#" className="card-btn">
                  Shop Now 
                  <div className="card-icon">
                    <MdKeyboardArrowRight className="card-icon-svg"/>
                    <MdKeyboardArrowRight className="card-icon-svg-v2"/>
                  </div>
              </a>
            </div>
            </div>
            <div className="card-img-content">
              <img
                src="https://ik.imagekit.io/fa1ylzjml/685e1a47e059aeefabea1f8c_offer-image-3-p-800.webp?updatedAt=1759917362387"
                className="card-img"
              />
                <div className="card-img-content-v3">
              <div className="card-label">
                  <h3 className="label">Buy 3 bottles</h3>
                  </div>
              <h2 className="card-title-v2"> <strong>Get 30% off </strong>
              <span>This week only!</span></h2>
              <a href="#" className="card-btn ">
                  Shop Now 
                  <div className="card-icon">
                    <MdKeyboardArrowRight className="card-icon-svg"/>
                    <MdKeyboardArrowRight className="card-icon-svg-v2"/>
                  </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
