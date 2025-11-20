import React from "react";
import { GoThumbsup } from "react-icons/go";
import { TbEggs } from "react-icons/tb";
import { LiaLeafSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

export default function Twocolumn() {
return (
  <>
    <section className="twocolumn-section">
      <div className="container-v2">
        <div className="twocolumn-wrapper">
          <div className="twocolumn-grid">
            <div className="twocolumn-grid-card">
              <GoThumbsup className="twocolumn-icon" />
              <h2 className="twocolumn-title">Quality guaranteed</h2>
              <p className="twocolumn-description">
                Lorem ipsum dolor amet consectetur adipiscing nulla ewtu
                turpis.
              </p>
            </div>
            <div className="twocolumn-grid-card">
              <TbEggs className="twocolumn-icon" />
              <h2 className="twocolumn-title">Unique varietals</h2>
              <p className="twocolumn-description">
                Lorem ipsum dolor amet consectetur adipiscing nulla ewtu
                turpis.
              </p>
            </div>
            <div className="twocolumn-grid-card">
              <LiaLeafSolid className="twocolumn-icon" />
              <h2 className="twocolumn-title">Exceptional flavor</h2>
              <p className="twocolumn-description">
                Lorem ipsum dolor amet consectetur adipiscing nulla ewtu
                turpis.
              </p>
            </div>
            <div className="twocolumn-grid-card">
              <CiStar className="twocolumn-icon" />
              <h2 className="twocolumn-title">Customer satisfaction</h2>
              <p className="twocolumn-description">
                Lorem ipsum dolor amet consectetur adipiscing nulla ewtu
                turpis.
              </p>
            </div>
          </div>
          <div className="twocolumn-content">
            <h3 className="twocolumn-content-title">Why choose our winery</h3>
            <h4 className="twocolumn-content-head">
              Trusted source for exceptional wines
            </h4>
            <p className="twocolumn-content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit dapibus neque vitae fringilla. Pellentesque in
              lobortis erat. Aenean nec nulla lectus. Proin at dignissim
              risus. Fusce vel convallis lorem, non venenatis orci.
            </p>
            <a href="#" className="btn btn-v2">
              <p className="btn-text">Contact Us</p>
              <div className="btn-arrow-wrapper">
                <GoArrowRight className="btn-arrow" />
                <GoArrowRight className="btn-arrow-v2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
